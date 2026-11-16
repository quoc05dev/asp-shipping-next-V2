import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/news/category/:slug", destination: "/media/news/category/:slug", permanent: false },
      { source: "/news/category/:slug/index.html", destination: "/media/news/category/:slug", permanent: false },
      { source: "/news/:path*", destination: "/media/latest-news", permanent: false },
      { source: "/media/news", destination: "/media/latest-news", permanent: false },
      { source: "/media/news/category", destination: "/media/latest-news", permanent: false },
      { source: "/media/news/:year/:month/:day/:slug", destination: "/media/latest-news", permanent: false },
      { source: "/media/news/:year/:month/:day/:slug/index.html", destination: "/media/latest-news", permanent: false },
      { source: "/:year(2023|2024|2025|2026)/:month/:day/:slug", destination: "/media/latest-news", permanent: false },
      { source: "/:year(2023|2024|2025|2026)/:month/:day/:slug/index.html", destination: "/media/latest-news", permanent: false },
      { source: "/page/:num(2|3|4|5|6|7|8|9)", destination: "/media/latest-news/page/:num", permanent: false },
      { source: "/latest-news", destination: "/media/latest-news", permanent: false },
      { source: "/press-releases", destination: "/media/news/category/press-releases", permanent: false },
      { source: "/articles", destination: "/media/news/category/articles", permanent: false },
      { source: "/gallery", destination: "/media/gallery", permanent: false },
      { source: "/glossary-of-terms", destination: "/media/glossary-of-terms", permanent: false },
      { source: "/environmental-policy", destination: "/sustainability/policies-guidelines/environmental-policy", permanent: false },
      { source: "/ship-recycling-policy", destination: "/sustainability/policies-guidelines/ship-recycling-policy", permanent: false },
      { source: "/join-us-at-sea", destination: "/careers", permanent: false },
      { source: "/fleet-list/download/:type(pdf|xlsx)", destination: "/our-fleet", permanent: false },
      { source: "/ammonia-propulsion", destination: "/our-fleet/ammonia-propulsion", permanent: false },
      { source: "/lco2-shipping", destination: "/our-fleet/lco2-shipping", permanent: false },
    ];
  },
};

export default nextConfig;
