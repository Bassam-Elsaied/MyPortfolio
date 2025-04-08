import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
