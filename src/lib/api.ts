import type { AdminLoginResponse, Blog } from "@/types/blog";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const parseJsonResponse = async <T>(response: Response): Promise<T> => {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error((data as { message?: string }).message || "Request failed");
  }

  return data as T;
};

export const blogApi = {
  getPublishedBlogs: async () => {
    const response = await fetch(`${API_BASE}/blogs`);
    return parseJsonResponse<Blog[]>(response);
  },
  getBlogBySlug: async (slug: string) => {
    const response = await fetch(`${API_BASE}/blogs/${slug}`);
    return parseJsonResponse<Blog>(response);
  },
  getAdminBlogs: async (token: string) => {
    const response = await fetch(`${API_BASE}/blogs/admin/all`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return parseJsonResponse<Blog[]>(response);
  },
  createBlog: async (payload: Partial<Blog>, token: string) => {
    const response = await fetch(`${API_BASE}/blogs`, {
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
    const response = await fetch(`${API_BASE}/blogs/${id}`, {
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
    const response = await fetch(`${API_BASE}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return parseJsonResponse<{ message: string }>(response);
  },
};

export const authApi = {
  login: async (username: string, password: string) => {
    const response = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    return parseJsonResponse<AdminLoginResponse>(response);
  },
};
