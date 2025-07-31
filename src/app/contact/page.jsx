"use client";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import React, { useReducer, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const initialState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
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

export default function ContactPage() {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Clear success message after 5 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  // Clear error message after 5 seconds
  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  // Update form validation whenever formData changes
  useEffect(() => {
    setIsFormValid(validateForm(formData));
  }, [formData]);

  const validateForm = (newFormData) => {
    return (
      newFormData.name.value.trim() !== "" &&
      newFormData.email.value.includes("@") &&
      newFormData.email.value.includes(".") &&
      newFormData.message.value.trim().length >= 10
    );
  };

  const handleChange = (field, value) => {
    const updatedFormData = { ...formData, [field]: { value, error: "" } };
    dispatch({ type: "UPDATE_FIELD", field, value });

    // Update form validation with the new data
    const newFormData = { ...formData, [field]: { value, error: "" } };
    setIsFormValid(validateForm(newFormData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check validation again before submitting
    if (!validateForm(formData)) {
      setErrorMessage("Please fill all fields correctly.");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Clear any previous error messages
    const templateParams = {
      from_name: formData.name.value,
      from_email: formData.email.value,
      message: formData.message.value,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setSuccessMessage("Your message has been sent successfully!");
          dispatch({ type: "RESET" });
          setIsFormValid(false);
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left h-full flex items-center justify-center">
        <div className="flex flex-col w-full max-w-[800px] ">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Let&apos;s <span>connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full gap-x-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input"
                  value={formData.name.value}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {formData.name.error && (
                  <p className="text-red-500 text-xs mt-1">
                    {formData.name.error}
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input"
                  value={formData.email.value}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {formData.email.error && (
                  <p className="text-red-500 text-xs mt-1">
                    {formData.email.error}
                  </p>
                )}
              </div>
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="textarea"
                value={formData.message.value}
                onChange={(e) => handleChange("message", e.target.value)}
              />
              {formData.message.error && (
                <p className="text-red-500 text-xs mt-1">
                  {formData.message.error}
                </p>
              )}
            </div>
            <button
              className={`btn rounded-full border border-white/50 max-w-[170px] py-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
              onClick={(e) => {
                if (!validateForm(formData)) {
                  e.preventDefault();
                  setErrorMessage("Please fill all fields correctly.");
                }
              }}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            {/* Debug info - remove this in production */}
            <div className="text-xs text-gray-400 mt-2">
              Form valid: {isFormValid ? "Yes" : "No"} | Name:{" "}
              {formData.name.value ? "✓" : "✗"} | Email:{" "}
              {formData.email.value ? "✓" : "✗"} | Message:{" "}
              {formData.message.value.length >= 10 ? "✓" : "✗"}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
