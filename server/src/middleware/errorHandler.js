export const notFoundHandler = (_req, res) => {
  res.status(404).json({ message: "Route not found" });
};

export const errorHandler = (error, _req, res, _next) => {
  console.error(error);

  if (error?.code === 11000) {
    return res.status(409).json({ message: "A blog with this slug already exists" });
  }

  return res.status(500).json({ message: error.message || "Internal server error" });
};
