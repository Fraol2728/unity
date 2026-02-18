import slugify from "slugify";
import { Blog } from "../models/Blog.js";

export const buildUniqueSlug = async (title, excludeId) => {
  const baseSlug = slugify(title || "post", {
    lower: true,
    strict: true,
    trim: true,
  }) || `post-${Date.now()}`;

  let slug = baseSlug;
  let suffix = 1;

  while (true) {
    const conflict = await Blog.findOne({
      slug,
      ...(excludeId ? { _id: { $ne: excludeId } } : {}),
    }).lean();

    if (!conflict) return slug;

    suffix += 1;
    slug = `${baseSlug}-${suffix}`;
  }
};
