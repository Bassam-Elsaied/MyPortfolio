"use client";

import { useEffect, useReducer, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsArrowRight } from "react-icons/bs";

const initialState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  subject: { value: "", error: "" },
  message: { value: "", error: "" },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: { value: action.value, error: "" } };
    case "SET_ERROR":
      return {
        ...state,
        [action.field]: { ...state[action.field], error: action.error },
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function validateField(field, value) {
  const trimmed = value.trim();

  switch (field) {
    case "name":
      return trimmed.length < 2 ? "Name must be at least 2 characters" : "";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
        ? ""
        : "Enter a valid email address";
    case "subject":
      return trimmed.length > 0 && trimmed.length < 3
        ? "Subject must be at least 3 characters"
        : "";
    case "message":
      return trimmed.length < 10
        ? "Message must be at least 10 characters"
        : "";
    default:
      return "";
  }
}

function ContactForm() {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID?.trim();
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID?.trim();
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim();

  useEffect(() => {
    if (publicKey) {
      emailjs.init({ publicKey });
    }
  }, [publicKey]);

  useEffect(() => {
    if (!successMessage) return;
    const timer = setTimeout(() => setSuccessMessage(""), 5000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  useEffect(() => {
    if (!errorMessage) return;
    const timer = setTimeout(() => setErrorMessage(""), 5000);
    return () => clearTimeout(timer);
  }, [errorMessage]);

  const handleChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const handleBlur = (field) => {
    const error = validateField(field, formData[field].value);
    if (error) {
      dispatch({ type: "SET_ERROR", field, error });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = ["name", "email", "subject", "message"];
    let hasError = false;

    fields.forEach((field) => {
      const error = validateField(field, formData[field].value);
      if (error) {
        dispatch({ type: "SET_ERROR", field, error });
        hasError = true;
      }
    });

    if (hasError) {
      setErrorMessage("Please fix the highlighted fields.");
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        "Email service is not configured. Add your EmailJS keys to .env"
      );
      return;
    }

    setLoading(true);
    setErrorMessage("");

    const name = formData.name.value.trim();
    const email = formData.email.value.trim().toLowerCase();
    const subject = formData.subject.value.trim() || "Portfolio contact";
    const message = formData.message.value.trim();

    const templateParams = {
      from_name: name,
      user_name: name,
      name,
      from_email: email,
      user_email: email,
      email,
      reply_to: email,
      subject,
      message,
      user_message: message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setSuccessMessage("Your message has been sent successfully!");
      dispatch({ type: "RESET" });
    } catch (error) {
      const detail = error?.text || error?.message || "Unknown error";
      console.error("EmailJS error:", detail);

      if (
        detail.includes("Invalid grant") ||
        detail.includes("insufficient authentication") ||
        detail.includes("412")
      ) {
        setErrorMessage(
          "Gmail connection expired. Reconnect your email in the EmailJS dashboard."
        );
      } else {
        setErrorMessage("Failed to send message. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const messageLength = formData.message.value.trim().length;

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm text-white/70">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="John Doe"
            className="input normal-case"
            value={formData.name.value}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            aria-invalid={!!formData.name.error}
          />
          {formData.name.error && (
            <p className="mt-1.5 text-xs text-red-400">{formData.name.error}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm text-white/70">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="john@example.com"
            className="input normal-case"
            value={formData.email.value}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={!!formData.email.error}
          />
          {formData.email.error && (
            <p className="mt-1.5 text-xs text-red-400">{formData.email.error}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-2 block text-sm text-white/70">
          Subject <span className="text-white/30">(optional)</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="Project inquiry"
          className="input normal-case"
          value={formData.subject.value}
          onChange={(e) => handleChange("subject", e.target.value)}
          onBlur={() => handleBlur("subject")}
          aria-invalid={!!formData.subject.error}
        />
        {formData.subject.error && (
          <p className="mt-1.5 text-xs text-red-400">{formData.subject.error}</p>
        )}
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="contact-message" className="text-sm text-white/70">
            Message
          </label>
          <span className="text-xs text-white/30">{messageLength}/500</span>
        </div>
        <textarea
          id="contact-message"
          placeholder="Tell me about your project..."
          rows={5}
          maxLength={500}
          className="textarea normal-case"
          value={formData.message.value}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={!!formData.message.error}
        />
        {formData.message.error && (
          <p className="mt-1.5 text-xs text-red-400">{formData.message.error}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent/80 px-6 text-sm font-medium text-white transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {loading ? "Sending..." : "Send message"}
        {!loading && (
          <BsArrowRight className="transition-transform group-hover:translate-x-1" />
        )}
      </button>

      {successMessage && (
        <p
          role="status"
          className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
        >
          {successMessage}
        </p>
      )}
      {errorMessage && (
        <p
          role="alert"
          className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
