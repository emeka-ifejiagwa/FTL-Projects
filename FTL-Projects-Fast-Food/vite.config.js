import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig((envConfig) => ({
  plugins: [
    react({
      include: ["./src/main.jsx"],
    }),
  ],
  server: {
    open: true,
    host: true,
  },
}))
