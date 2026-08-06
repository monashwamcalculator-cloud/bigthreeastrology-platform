/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/love-compatibility-calculator',
        destination: '/tools/love-compatibility',
        permanent: true,
      },
      {
        source: '/jupiter-sign-calculator',
        destination: '/tools/jupiter-sign',
        permanent: true,
      },
      {
        source: '/chiron-sign-calculator',
        destination: '/tools/chiron',
        permanent: true,
      },
      {
        source: '/moon-sign-calculator',
        destination: '/tools/moon-sign',
        permanent: true,
      },
      {
        source: '/sun-sign-calculator',
        destination: '/tools/sun-sign',
        permanent: true,
      },
      {
        source: '/saturn-sign-calculator',
        destination: '/tools/saturn-sign',
        permanent: true,
      },
      {
        source: '/mars-sign-calculator',
        destination: '/tools/mars-sign',
        permanent: true,
      },
      {
        source: '/rising-sign-calculator',
        destination: '/tools/rising-sign',
        permanent: true,
      },
      {
        source: '/mercury-sign-calculator',
        destination: '/tools/mercury-sign',
        permanent: true,
      },
      {
        source: '/venus-sign-calculator',
        destination: '/tools/venus-sign',
        permanent: true,
      },
      {
        source: '/big-three-sign-calculator',
        destination: '/tools/big-three',
        permanent: true,
      },
      {
        source: '/blog/mayan-astrology-sign-guide',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/chiron-sign-calculator-guide',
        destination: '/tools/chiron',
        permanent: true,
      },
      {
        source: '/blog/synastry-chart-calculator-guide',
        destination: '/blog/vedic-kundali-milan-36-guna-guide',
        permanent: true,
      },
      {
        source: '/blog/whats-my-big-3-guide',
        destination: '/blog/how-to-read-big-three',
        permanent: true,
      },
    ];
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
    {
      source: '/home/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/blog/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};

export default nextConfig;
