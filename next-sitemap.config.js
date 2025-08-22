// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.lotuswebsites.com';

export default {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.8,
};
