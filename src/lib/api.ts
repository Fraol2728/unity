import type { AdminLoginResponse, Blog } from "@/types/blog";

const resolveApiBase = () => {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL;
  if (configuredBaseUrl) {
    return configuredBaseUrl;
  }

  if (typeof window === "undefined") {
    return "http://localhost:5000/api";
  }

  if (import.meta.env.DEV) {
    return "http://localhost:5000/api";
  }

  return `${window.location.origin}/api`;
};

const API_BASE = resolveApiBase();

const requestJson = async (input: RequestInfo | URL, init?: RequestInit) => {
  try {
    return await fetch(input, init);
  } catch {
    throw new Error(
      "Unable to reach the API. Check that the backend is running and CORS/API URL settings are correct.",
    );
  }
};

const parseJsonResponse = async <T>(response: Response): Promise<T> => {
  const contentType = response.headers.get("content-type") || "";
  const isJsonResponse = contentType.includes("application/json");
  const data = isJsonResponse ? await response.json().catch(() => ({})) : {};

  if (!response.ok) {
    throw new Error((data as { message?: string }).message || "Request failed");
  }

  return data as T;
};

export const blogApi = {
  getPublishedBlogs: async () => {
    const response = await requestJson(`${API_BASE}/blogs`);
    const data = await parseJsonResponse<unknown>(response);

    if (!Array.isArray(data)) {
      throw new Error("Unexpected response while loading blog posts.");
    }

    return data as Blog[];
  },
  getBlogBySlug: async (slug: string) => {
    const response = await requestJson(`${API_BASE}/blogs/${slug}`);
    const data = await parseJsonResponse<unknown>(response);

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("Unexpected response while loading the blog post.");
    }

    return data as Blog;
  },
  getAdminBlogs: async (token: string) => {
    const response = await requestJson(`${API_BASE}/blogs/admin/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return parseJsonResponse<Blog[]>(response);
  },
  createBlog: async (payload: Partial<Blog>, token: string) => {
    const response = await requestJson(`${API_BASE}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    return parseJsonResponse<Blog>(response);
  },
  updateBlog: async (id: string, payload: Partial<Blog>, token: string) => {
    const response = await requestJson(`${API_BASE}/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    return parseJsonResponse<Blog>(response);
  },
  deleteBlog: async (id: string, token: string) => {
    const response = await requestJson(`${API_BASE}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return parseJsonResponse<{ message: string }>(response);
  },
};

export const authApi = {
  login: async (username: string, password: string): Promise<AdminLoginResponse> => {
    const response = await requestJson(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await parseJsonResponse<AdminLoginResponse>(response);
    localStorage.setItem("token", data.token);

    return data;
  },
};
