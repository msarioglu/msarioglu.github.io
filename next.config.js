module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    compress: true,
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' }
      }
    },
    images: {
      unoptimized: true,
    },
  };
  return nextConfig;
}