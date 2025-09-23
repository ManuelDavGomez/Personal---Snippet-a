// components/CopyButton.tsx
"use client";

import { useState } from "react";

export default function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error copiando texto:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1 text-sm rounded-lg bg-gray-800 text-gray-500 hover:bg-gray-700 transition cursor-pointer"
    >
      {copied ? "✅ Copiado" : label || "📋 Copiar"}
    </button>
  );
}
