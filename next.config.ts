import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  headers: async () => [
    {

      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value:
            'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
        },
        {
          key: 'Pragma',
          value: 'no-cache',
        },
        {
          key: 'Expires',
          value: '0',
        },
      ],
    },
  ],
};

export default nextConfig;
