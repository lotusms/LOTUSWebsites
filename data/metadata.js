const DOMAIN = "https://www.lotuswebsites.com";
const TAGMANAGER_ID = "G-4N8E3JN0EC";
const ADWORDS_TAG_ID = "";

export const bannerImages = {
  logoImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/LotusLogo.webp",
  defaultImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/default.webp",
  appDevelopmentImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/appdev-leHxVGmweAs29pW5ek9brrXL5J5qXQ.webp",
  brandDesignImage: "https://firebasestorage.googleapis.com/v0/b/cobalt-badge-187102.firebasestorage.app/o/brand-design.webp?alt=media&token=66a482cc-5ae5-4ed2-9ed2-97e72e9f3f45",
  emailMarketingImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/email-marketing.webp",  
  graphicDesignImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/graphic-design-BLzCTSBHXecRwz6IgHO9KpDzEfP7Iu.webp",
  ppcMarketingImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/ppc.webp",
  socialMediaManagementImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/socialmanagement.webp",
  webDesignImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/web-design-banner-DGr2LcdoP58MZ1IxMUBlWrgSyvltcG.webp",
  webMaintenanceImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/web-maintenance-banners-wYsZLCEdlV7oPnX2KvoEGWuIhndKSL.webp",
  webRedesignImage: "https://xwb0gyneaxhzjucv.public.blob.vercel-storage.com/banners/web-design-banner-DGr2LcdoP58MZ1IxMUBlWrgSyvltcG.webp",  
  blogImage: "https://firebasestorage.googleapis.com/v0/b/cobalt-badge-187102.firebasestorage.app/o/blogging.webp?alt=media&token=1f00aab4-ec7c-4237-8093-43d1f53acac8",
};

export const pageMetadata = {
  "/": {
    title: "Web Design & Development | LOTUS Websites",
    description: "Welcome to LOTUS Websites—your partner for web design, mobile app development, branding, and more in Harrisburg, PA.",
    keywords: "web design Harrisburg, digital marketing Pennsylvania, branding services Harrisburg, mobile apps for small business, SEO agency Harrisburg",
    canonical: DOMAIN,
    ogimage: bannerImages.defaultImage,
  },
  "/about": {
    title: "About Our Web Design Agency | LOTUS Websites",
    description: "Discover LOTUS Websites, a Harrisburg web design agency offering creative, results-driven services across the U.S.",
    keywords: "about LOTUS Websites, digital agency background, web design team Harrisburg, creative agency USA",
    canonical: `${DOMAIN}/about`,
    ogimage: bannerImages.defaultImage
  },
  "/contact": {
    title: "Contact Us | Web Design & App Development",
    description: "Contact LOTUS Websites for expert web, SEO, and branding services. Based in Harrisburg, serving clients nationwide.",
    keywords: "contact LOTUS Marketing, request web design quote, email SEO agency, Harrisburg digital marketing contact",
    canonical: `${DOMAIN}/contact`,
    ogimage: bannerImages.defaultImage,
  },
  "/app-development": {
    title: "Mobile App Development Services | LOTUS Websites",
    description: "Build high-performance apps for iOS and Android with LOTUS Websites. Custom mobile app development made easy.",
    keywords: "mobile app development Harrisburg, cross-platform app design, iOS Android developer, small business apps",
    ogimage: bannerImages.appDevelopmentImage,
    canonical: `${DOMAIN}/app-development`
  },
  "/web-design": {
    title: "Custom Web Design Harrisburg | LOTUS Websites",
    description: "Custom web design that reflects your brand. No templates—just high-performing, user-focused websites that deliver results.",
    keywords: "custom website design, responsive websites Harrisburg, eCommerce web development, UX design services, Harrisburg UI/UX",
    ogimage: bannerImages.webDesignImage,
    canonical: `${DOMAIN}/web-design`
  },
  "/web-redesign": {
    title: "Website Redesign Services | LOTUS Websites",
    description: "Redesign your site with a custom look that reflects your brand. Avoid templates and highlight what matters most to your business.",
    keywords: "website redesign experts, site refresh Harrisburg, UX overhaul, mobile redesign service, SEO-friendly redesign",
    ogimage: bannerImages.webRedesignImage,
    canonical: `${DOMAIN}/web-redesign`
  },
  "/web-maintenance": {
    title: "Website Maintenance Services | LOTUS Websites",
    description: "Keep your website updated, secure, and fast with affordable maintenance from LOTUS Websites.",
    keywords: "website maintenance Harrisburg, site speed optimization, plugin updates, WordPress maintenance, security monitoring",
    ogimage: bannerImages.webMaintenanceImage,
    canonical: `${DOMAIN}/web-maintenance`
  },
  "/privacy-policy": {
    title: "Privacy Policy | LOTUS Websites",
    description: "Read our privacy policy to understand how we collect, use, and protect your information.",
    keywords: "privacy policy LOTUS, user data protection, online privacy statement, data collection policy",
    ogimage: bannerImages.defaultImage,
    canonical: `${DOMAIN}/privacy-policy`
  },
  "/terms-of-use": {
    title: "Terms Of Use | LOTUS Websites",
    description: "Read our terms of use to understand the rules and regulations for using our website.",
    keywords: "terms of use, user agreement, service terms, website policy, LOTUS terms and conditions",
    ogimage: bannerImages.defaultImage,
    canonical: `${DOMAIN}/terms-of-use`
  },
  "/refund-policy": {
    title: "Refund Policy | LOTUS Websites",
    description: "Read our refund policy to understand the conditions under which we offer refunds.",
    keywords: "refund terms, cancellation policy, LOTUS refunds, service cancellation terms, money-back policy",
    ogimage: bannerImages.defaultImage,
    canonical: `${DOMAIN}/refund-policy`
  },
  "/not-found": {
    title: "Page Not Found | LOTUS Websites",
    description: "The page you are looking for does not exist. Please check the URL or return to the homepage.",
    keywords: "404 page, missing page error, broken link, wrong URL, LOTUS page not found",
    ogimage: bannerImages.defaultImage,
    canonical: `${DOMAIN}/not-found`
  },
};

export const globalMetadata = {
  title: "LOTUS Websites",
  description: "LOTUS Websites, your trusted partner for web design, app development, brand design, and web maintenance in Harrisburg, PA!",
  keywords: "web design, web development, mobile app development, brand design, web maintenance, online marketing, SEO",
  url: DOMAIN,
  TAGMANAGER_ID,
  ADWORDS_TAG_ID,
  image: bannerImages.logoImage,
};