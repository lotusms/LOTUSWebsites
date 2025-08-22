'use client';

import { Facebook, Instagram, X } from "@/components/global/SocialNetworks";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LogoMs from "../header/LogoMs";

const companylinks = [
  { name: "(717) 945-8132", link: "tel:(717) 945-8132" },
  { name: "Email Us", link: "mailto:info@lotusmarketingsolutions.com" },
  { name: "Contact us", link: "/contact" },
];

const worklinks = [
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms Of Use", link: "/terms-of-use" },
  { name: "Refund Policy", link: "/refund-policy" },
];

const sociallinks = [
  { name: "Facebook", link: "https://www.facebook.com/lotusmarketingsolutionsLLC", icon: <Facebook /> },
  { name: "Instagram", link: "https://www.instagram.com/lotusmarsol/", icon: <Instagram /> },
  { name: "X", link: "https://x.com/LotusMarketingS", icon: <X /> },
];

const Footer = () => {
  const router = useRouter();

  const handleNavigate = (href) => {
    router.push(href);
    window.scrollTo(0, 0);
  };

  const isExternalLink = (link) => {
    return link.startsWith("http") || link.startsWith("mailto") || link.startsWith("tel");
  };

  return (
    <footer className="footer-section py-16 w-full bg-slate-400">
      <div className="mx-auto max-w-7xl border-t px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center items-start justify-center">
          {/* Company Links */}
          <div>
            <div className="font-display text-sm font-sfHeavy tracking-wider text-sky-950">Company</div>
            <ul role="list" className="mt-4 text-sm text-sky-950">
              {companylinks.map((link, index) => (
                <li key={index} className="mt-4">
                  {isExternalLink(link.link) ? (
                    <Link className="transition hover:text-sky-600" href={link.link} target="_blank" rel="noopener noreferrer" legacyBehavior>
                      {link.name}
                    </Link>
                  ) : (
                    <Link href={link.link} legacyBehavior>
                      <button className="transition hover:text-sky-600">{link.name}</button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Work Links */}
          <div>
            <div className="font-display text-sm font-sfHeavy tracking-wider text-sky-950">Work</div>
            <ul role="list" className="mt-4 text-sm text-sky-950">
              {worklinks.map((link, index) => (
                <li key={index} className="mt-4">
                  <Link href={link.link} legacyBehavior>
                    <button className="transition hover:text-sky-600">{link.name}</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="font-display text-sm font-sfHeavy tracking-wider text-sky-950">Connect</div>
            <ul role="list" className="mt-4 text-sm text-sky-950">
              {sociallinks.map((link, index) => (
                <li key={index} className="flex items-center justify-center mt-4 gap-2">
                  <Link href={link.link} legacyBehavior>
                    <a className="transition hover:text-sky-600 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                      Follow us on {link.icon}
                    </a>
                  </Link>
                </li>              
              ))}
            </ul>
          </div>

          {/* Logo & Copyright */}
          <div className="flex flex-col items-center">
            <LogoMs 
              onClick={() => handleNavigate('/')}
              fillFlower="fill-green-600"        
              fillLotus="fill-slate-600" 
            />
            <p className="text-sm text-sky-950">LOTUS Marketing Solutions. 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
