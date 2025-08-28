import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// Use env VITE_BASE from the GitHub Action for Pages
export default defineConfig({
plugins: [react()],
base: '/dr-screener/',
})