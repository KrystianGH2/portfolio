const baseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://portfolio-j42o.onrender.com";

export async function auth(path: string, options: RequestInit = {}) {
  const request: RequestInit = {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  return fetch(`${baseUrl}${path}`, request);
}
