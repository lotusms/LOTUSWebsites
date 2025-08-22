import process from "node:process";

export default function handler(req, res) {
  const siteUrl = process.env.PROD_FRONTEND_URL;

  if (!siteUrl) {
    console.error(`❌ Missing PROD_FRONTEND_URL in environment variables. (cwd: ${process.cwd()})`);
    return res.status(500).send("Server Error: Missing site URL configuration.");
  }

  console.log(`✅ robots.txt requested. Serving from: ${process.cwd()}`);

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(`User-agent: *
Disallow: /api/
Disallow: /admin/
Disallow: /test/
Allow: /
Sitemap: ${siteUrl}/sitemap.xml`);
}
