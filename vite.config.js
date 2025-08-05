import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        secondary: "#1565C0",
        accent: "#A7F3D0",
        background: "#E3F2FD",
        slate: "#64748B",
      },
    },
  },
});
