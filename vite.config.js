import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is the configuration file for Vite
export default defineConfig({
  plugins: [react()],
  server: {
    // This tells Vite to listen on all network interfaces,
    // which is necessary for it to work in a cloud environment like Replit.
    host: '0.0.0.0',
    // This is the fix for the "Blocked request" error.
    // It tells Vite's security guard to add your Replit URL to the guest list.
    // We use a special Replit variable so it works even if the URL changes!
    allowedHosts: [
        process.env.REPLIT_DEV_DOMAIN
    ],
  }
})