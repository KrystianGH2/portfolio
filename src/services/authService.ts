const baseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://portfolio-j42o.onrender.com";

export async function auth(path: string, options: RequestInit = {}) {
  const hasBody = options.body;
  const headers = new Headers(options.headers);

  if (hasBody && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(`${baseUrl}${path}`, {
    credentials: "include",
    headers,
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res;
}
