const API_BASE_URL = "http://openqa-backend.onrender.com/api";

export const api = {
  register: async (data: { username: string; password: string }) => {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Registration failed");

    return res.text();
  },

  login: async (data: { username: string; password: string }) => {
    const res = await fetch("http://openqa-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const result = await res.json();

    return result as { token: string };
  },
};
