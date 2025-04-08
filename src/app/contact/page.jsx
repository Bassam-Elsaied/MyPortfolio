"use client";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import React, { useReducer, useState } from "react";
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

export default function page() {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (newFormData) => {
    return (
      newFormData.name.value.trim() !== "" &&
      newFormData.email.value.includes("@") &&
      newFormData.message.value.trim().length >= 10
    );
  };

  const handleChange = (field, value) => {
    const updatedFormData = { ...formData, [field]: { value, error: "" } };
    dispatch({ type: "UPDATE_FIELD", field, value });
    setIsFormValid(validateForm(updatedFormData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

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
          //   console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message has been sent successfully!");
          dispatch({ type: "RESET" });
          setIsFormValid(false);
        },
        (error) => {
          //   console.error("FAILED...", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left h-full flex items-center justify-center">
        <div className="flex flex-col w-full max-w-700px ">
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
              className="btn rounded-full border border-white/50 max-w-[170px] py-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              type="submit"
              disabled={loading || !isFormValid}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
}
