module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    distDir: 'production',
  };
  return nextConfig;
}