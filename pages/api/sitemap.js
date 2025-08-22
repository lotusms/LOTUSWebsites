import { join } from "path";
import { writeFileSync } from "fs";
import { cwd } from "process";

const SITE_URL = "https://www.lotuswebsites.com";

export default async function handler(req, res) {
  try {
    const blogUrls = [
      `${SITE_URL}/blog/exceeding-your-website-s-functionality`,
      `${SITE_URL}/blog/how-much-is-a-website`,
      `${SITE_URL}/blog/why-speed-is-essential-in-website-design`,
      `${SITE_URL}/blog/never-say-you-are-too-busy`,
      `${SITE_URL}/blog/negative-vs-positive-actions`,
      `${SITE_URL}/blog/excessive-animations-can-kill-user-experience`,
      `${SITE_URL}/blog/leveraging-blog-content-for-local-seo`,
      `${SITE_URL}/blog/diy-website-builders-vs-custom-made-websites-which-one-is-right-for-you`,
      `${SITE_URL}/blog/confirmation-dialogs-ugh`,
      `${SITE_URL}/blog/optimizing-content-for-local-search-results`,
      `${SITE_URL}/blog/user-usability-and-user-experience`,
      `${SITE_URL}/blog/tips-for-creating-a-stunning-online-presence`,
      `${SITE_URL}/blog/benefits-of-adding-a-map-and-local-contact-page`,
      `${SITE_URL}/blog/is-there-an-roi-in-buying-a-website`,
      `${SITE_URL}/blog/choosing-the-right-logo`,
      `${SITE_URL}/blog/should-i-use-wordpress`,
      `${SITE_URL}/blog/using-images-on-a-website`,
    ];

    const staticPages = [
      `${SITE_URL}/`,
      `${SITE_URL}/web-design`,
      `${SITE_URL}/web-redesign`,
      `${SITE_URL}/app-development`,
      `${SITE_URL}/brand-design`,
      `${SITE_URL}/graphic-design`,
      `${SITE_URL}/web-maintenance`,
      `${SITE_URL}/social-media-management`,
      `${SITE_URL}/ppc-marketing`,
      `${SITE_URL}/email-marketing`,
      `${SITE_URL}/about`,
      `${SITE_URL}/contact`,
      `${SITE_URL}/blog`, 
      `${SITE_URL}/privacy-policy`,
      `${SITE_URL}/terms-of-use`,
      `${SITE_URL}/refund-policy`,
      `${SITE_URL}/not-found`,
    ];

    const allUrls = [...staticPages, ...blogUrls];

    const sitemap = generateSitemap(allUrls);

    const filePath = join(cwd(), "public", "sitemap.xml");
    writeFileSync(filePath, sitemap, "utf8");

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

function generateSitemap(urls) {
  const lastMod = new Date().toISOString();
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
      <url>
        <loc>${url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${url.includes("/blog/") ? "0.6" : "0.8"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;
}
