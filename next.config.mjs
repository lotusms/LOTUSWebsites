/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
import process from "process";
import withBundleAnalyzer from "@next/bundle-analyzer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xwb0gyneaxhzjucv.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/**", // allow all buckets
      },
    ],
  },

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname), 
    };
    config.module.rules.push({
      test: /\.(woff|woff2|ttf|otf)$/,
      type: "asset/resource",
      generator: {
        filename: "static/fonts/[name][ext]",
      },
    });
    return config;
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.lotuswebsites.com',
          },
        ],
        destination: 'https://www.lotuswebsites.com/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)", 
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.com https://*.vercel-insights.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://use.typekit.net https://p.typekit.net",
              "img-src 'self' data: https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com https://firebasestorage.googleapis.com https://www.google-analytics.com",
              "font-src 'self' https://fonts.gstatic.com https://use.typekit.net https://p.typekit.net",
              "media-src 'self' https://firebasestorage.googleapis.com",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://*.vercel-insights.com https://va.vercel-scripts.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'"
            ].join("; ")
          },
          {
            key: "Content-Security-Policy-Report-Only",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://vercel.com
                https://*.vercel-insights.com
                https://va.vercel-scripts.com;
              style-src 'self' 'unsafe-inline'
                https://fonts.googleapis.com
                https://use.typekit.net
                https://p.typekit.net;
              img-src 'self' data:
                https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com
                https://firebasestorage.googleapis.com
                https://www.google-analytics.com;
              font-src 'self'
                https://fonts.gstatic.com
                https://use.typekit.net
                https://p.typekit.net;
              media-src 'self' https://firebasestorage.googleapis.com;
              connect-src 'self'
                https://www.google-analytics.com
                https://vitals.vercel-insights.com
                https://*.vercel-insights.com
                https://va.vercel-scripts.com;
            `.replace(/\s{2,}/g, " ").trim(),
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/_next/static/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Vary", value: "Accept-Encoding" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/images/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Vary", value: "Accept-Encoding" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/fonts/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Vary", value: "Accept-Encoding" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/icons/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Vary", value: "Accept-Encoding" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/static/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Vary", value: "Accept-Encoding" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/svg/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Vary", value: "Accept-Encoding" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/_next/static/chunks/:all*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Vary", value: "Accept-Encoding" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default analyzer(nextConfig);
