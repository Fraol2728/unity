import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAdminBlogs,
  getBlogBySlug,
  getPublishedBlogs,
  updateBlog,
} from "../controllers/blogController.js";
import { requireAdminAuth } from "../middleware/auth.js";

const blogRouter = Router();

blogRouter.get("/admin/all", requireAdminAuth, getAdminBlogs);
blogRouter.get("/", getPublishedBlogs);
blogRouter.get("/:slug", getBlogBySlug);
blogRouter.post("/", requireAdminAuth, createBlog);
blogRouter.put("/:id", requireAdminAuth, updateBlog);
blogRouter.delete("/:id", requireAdminAuth, deleteBlog);

export { blogRouter };
