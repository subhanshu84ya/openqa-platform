"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function Home() {
  const [status, setStatus] = useState("Checking backend...");

  useEffect(() => {
    api.get("/health")
      .then((res) => setStatus(res))
      .catch(() => setStatus("Backend not connected"));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Codmigo Platform</h1>
      <p>Backend Status: {status}</p>
    </main>
  );
}
