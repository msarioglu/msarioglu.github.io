module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/#home': { page: '/home' },
        '/#about': { page: '/about' },
        '/#projects': { page: '/projects' },
      }
    },
    images: {
      unoptimized: true,
    },
  };
  return nextConfig;
}