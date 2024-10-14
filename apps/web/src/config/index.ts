let BACKEND_URL = "";

if (process.env.NODE_ENV !== "production") {
  BACKEND_URL = "http://localhost:4000/graphql";
} else {
  BACKEND_URL = "https://your-production-url.com/graphql";
}

export const config = {
  BACKEND_URL,
};
