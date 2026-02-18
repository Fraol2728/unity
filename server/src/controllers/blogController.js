import mongoose from "mongoose";
import { Blog } from "../models/Blog.js";
import { buildUniqueSlug } from "../utils/slug.js";

export const getPublishedBlogs = async (_req, res, next) => {
  try {
    const blogs = await Blog.find({ published: true })
      .sort({ createdAt: -1 })
      .select("title slug content coverImage author createdAt updatedAt published")
      .lean();

    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, published: true }).lean();

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.json(blog);
  } catch (error) {
    return next(error);
  }
};

export const getAdminBlogs = async (_req, res, next) => {
  try {
    const blogs = await Blog.find()
      .sort({ updatedAt: -1 })
      .select("title slug content coverImage author createdAt updatedAt published")
      .lean();

    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const { title, content, coverImage, author, published = false } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ message: "title, content, and author are required" });
    }

    const slug = await buildUniqueSlug(title);

    const blog = await Blog.create({
      title,
      slug,
      content,
      coverImage: coverImage || "",
      author,
      published: Boolean(published),
    });

    return res.status(201).json(blog);
  } catch (error) {
    return next(error);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, coverImage, author, published } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid blog id" });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    if (title && title !== blog.title) {
      blog.slug = await buildUniqueSlug(title, blog._id);
      blog.title = title;
    }

    if (typeof content === "string") blog.content = content;
    if (typeof coverImage === "string") blog.coverImage = coverImage;
    if (typeof author === "string") blog.author = author;
    if (typeof published === "boolean") blog.published = published;

    await blog.save();

    return res.json(blog);
  } catch (error) {
    return next(error);
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid blog id" });
    }

    const deleted = await Blog.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Blog not found" });
    }

    return res.json({ message: "Blog deleted" });
  } catch (error) {
    return next(error);
  }
};
