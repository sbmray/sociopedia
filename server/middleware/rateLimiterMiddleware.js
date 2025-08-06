import rateLimit from "express-rate-limit"; // Added Rate Limiter

export const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 3, // Max 3 requests per IP
  message: "Too many requests, please try again later.",
});
