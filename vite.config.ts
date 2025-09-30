// Map Next-specific analytics entry to the React entry so it works in Vite/Vocs
export default {
  resolve: {
    alias: {
      '@vercel/analytics/next': '@vercel/analytics/react',
    },
  },
}
