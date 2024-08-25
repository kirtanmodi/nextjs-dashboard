/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: "incremental",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.next.modikirtan.com",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
