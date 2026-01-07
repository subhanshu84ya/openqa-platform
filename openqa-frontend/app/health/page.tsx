"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function Home() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || "https://openqa-backend.onrender.com/api"}/health`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Backend not connected");
        const text = await res.text();
        setStatus(text);
      })
      .catch(() => setStatus("Backend not connected"));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Codmigo Platform</h1>
      <p>Backend Status: {status}</p>
    </main>
  );
}
