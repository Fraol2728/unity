import mongoose from "mongoose";
import slugify from "slugify";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      trim: true,
      default: "",
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

blogSchema.pre("validate", function setSlug(next) {
  if (this.isModified("title") || !this.slug) {
    const baseSlug = slugify(this.title || "post", {
      lower: true,
      strict: true,
      trim: true,
    });

    this.slug = baseSlug || `post-${Date.now()}`;
  }

  next();
});

export const Blog = mongoose.model("Blog", blogSchema);
