export default {
  VITE_WORKOS_CLIENT_ID: import.meta.env.VITE_WORKOS_CLIENT_ID || "",
  VITE_WORKOS_DEV_MODE: import.meta.env.VITE_WORKOS_DEV_MODE === "true",
};
