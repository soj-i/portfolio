/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for exporting static HTML
    images: {
      unoptimized: true, // Ensures image compatibility during export
    },
  };
  
  module.exports = nextConfig;
  