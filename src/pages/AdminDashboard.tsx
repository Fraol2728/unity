import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { authApi, blogApi } from "@/lib/api";
import type { Blog } from "@/types/blog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";

const emptyForm = {
  title: "",
  author: "",
  coverImage: "",
  content: "",
  published: false,
};

const AdminDashboard = () => {
  const queryClient = useQueryClient();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const blogsQuery = useQuery({
    queryKey: ["admin-blogs", token],
    queryFn: () => blogApi.getAdminBlogs(token),
    enabled: Boolean(token),
  });

  const loginMutation = useMutation({
    mutationFn: () => authApi.login(credentials.username, credentials.password),
    onSuccess: (data) => {
      setToken(data.token);
      setMessage("Logged in successfully.");
    },
    onError: (error: Error) => setMessage(error.message),
  });

  const saveMutation = useMutation({
    mutationFn: () =>
      editingId
        ? blogApi.updateBlog(editingId, form, token)
        : blogApi.createBlog(form, token),
    onSuccess: () => {
      setForm(emptyForm);
      setEditingId(null);
      setMessage(editingId ? "Blog updated." : "Blog created.");
      queryClient.invalidateQueries({ queryKey: ["admin-blogs", token] });
      queryClient.invalidateQueries({ queryKey: ["published-blogs"] });
    },
    onError: (error: Error) => setMessage(error.message),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => blogApi.deleteBlog(id, token),
    onSuccess: () => {
      setMessage("Blog deleted.");
      queryClient.invalidateQueries({ queryKey: ["admin-blogs", token] });
      queryClient.invalidateQueries({ queryKey: ["published-blogs"] });
    },
    onError: (error: Error) => setMessage(error.message),
  });

  const blogList = useMemo(() => blogsQuery.data || [], [blogsQuery.data]);

  const startEdit = (blog: Blog) => {
    setEditingId(blog._id);
    setForm({
      title: blog.title,
      author: blog.author,
      coverImage: blog.coverImage,
      content: blog.content,
      published: blog.published,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  return (
    <Layout>
      <section className="section-padding reveal-up">
        <div className="container-custom max-w-5xl space-y-8">
          <h1 className="font-display text-3xl font-bold">Admin Dashboard</h1>
          {message && <p className="text-sm text-primary">{message}</p>}

          {!token ? (
            <form
              className="space-y-3 max-w-md border border-border rounded-xl p-6"
              onSubmit={(event) => {
                event.preventDefault();
                loginMutation.mutate();
              }}
            >
              <h2 className="font-semibold text-xl">Admin Login</h2>
              <Input
                placeholder="Username"
                value={credentials.username}
                onChange={(event) => setCredentials((prev) => ({ ...prev, username: event.target.value }))}
              />
              <Input
                placeholder="Password"
                type="password"
                value={credentials.password}
                onChange={(event) => setCredentials((prev) => ({ ...prev, password: event.target.value }))}
              />
              <Button type="submit" disabled={loginMutation.isPending}>
                {loginMutation.isPending ? "Signing in..." : "Login"}
              </Button>
            </form>
          ) : (
            <>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setToken("");
                    resetForm();
                  }}
                >
                  Logout
                </Button>
              </div>

              <form
                className="space-y-3 border border-border rounded-xl p-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  saveMutation.mutate();
                }}
              >
                <h2 className="font-semibold text-xl">{editingId ? "Edit Blog" : "Add Blog"}</h2>
                <Input
                  placeholder="Title"
                  value={form.title}
                  onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
                  required
                />
                <Input
                  placeholder="Author"
                  value={form.author}
                  onChange={(event) => setForm((prev) => ({ ...prev, author: event.target.value }))}
                  required
                />
                <Input
                  placeholder="Cover Image URL"
                  value={form.coverImage}
                  onChange={(event) => setForm((prev) => ({ ...prev, coverImage: event.target.value }))}
                />
                <Textarea
                  placeholder="Blog content (HTML or markdown-like text)"
                  rows={10}
                  value={form.content}
                  onChange={(event) => setForm((prev) => ({ ...prev, content: event.target.value }))}
                  required
                />
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(event) => setForm((prev) => ({ ...prev, published: event.target.checked }))}
                  />
                  Published
                </label>
                <div className="flex gap-3">
                  <Button type="submit" disabled={saveMutation.isPending}>
                    {saveMutation.isPending ? "Saving..." : editingId ? "Update Blog" : "Create Blog"}
                  </Button>
                  {editingId && (
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Cancel Edit
                    </Button>
                  )}
                </div>
              </form>

              <section className="space-y-4">
                <h2 className="font-semibold text-xl">Blog List</h2>
                {blogsQuery.isLoading && <p className="text-muted-foreground">Loading blogs...</p>}
                <div className="space-y-3">
                  {blogList.map((blog) => (
                    <div key={blog._id} className="border border-border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <p className="font-medium">{blog.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {blog.author} · {blog.published ? "Published" : "Draft"}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button type="button" variant="outline" onClick={() => startEdit(blog)}>
                          Edit
                        </Button>
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => deleteMutation.mutate(blog._id)}
                          disabled={deleteMutation.isPending}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;
