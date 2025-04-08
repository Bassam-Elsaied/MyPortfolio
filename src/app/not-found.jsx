"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center bg-primary text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md p-6"
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <button className="bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition cursor-pointer">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
