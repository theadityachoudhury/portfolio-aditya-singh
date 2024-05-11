/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'drive.google.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
};

export default nextConfig;
