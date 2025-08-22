'use client';

import { Facebook, Instagram, X } from "@/components/global/SocialNetworks";
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

  const isExternalLink = (link) => {
    return link.startsWith("http") || link.startsWith("mailto") || link.startsWith("tel");
  };

  return (
    <footer className="footer-section py-16 w-full bg-black">
      <div className="mx-auto max-w-7xl border-t px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 text-center items-start justify-center">
          {/* Company Links */}
          <div>
            <div className="font-display text-sm font-sfHeavy tracking-wider text-lime-600">Company</div>
            <ul role="list" className="mt-4 text-sm text-slate-200">
              {companylinks.map((link, index) => (
                <li key={index} className="mt-4">
                  {isExternalLink(link.link) ? (
                    <Link className="transition hover:text-lime-500" href={link.link} target="_blank" rel="noopener noreferrer" legacyBehavior>
                      {link.name}
                    </Link>
                  ) : (
                    <Link href={link.link} legacyBehavior>
                      <button className="transition hover:text-lime-500">{link.name}</button>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Work Links */}
          <div>
            <div className="font-display text-sm font-sfHeavy tracking-wider text-lime-600">Work</div>
            <ul role="list" className="mt-4 text-sm text-slate-200">
              {worklinks.map((link, index) => (
                <li key={index} className="mt-4">
                  <Link href={link.link} legacyBehavior>
                    <button className="transition hover:text-lime-500">{link.name}</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="font-display text-sm font-sfHeavy tracking-wider text-lime-600">Connect</div>
            <ul role="list" className="mt-4 text-sm text-slate-200">
              {sociallinks.map((link, index) => (
                <li key={index} className="flex items-center justify-center mt-4 gap-2">
                  <Link href={link.link} legacyBehavior>
                    <a className="transition hover:text-lime-500 flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                      Follow us on {link.icon}
                    </a>
                  </Link>
                </li>              
              ))}
            </ul>
          </div>

          {/* Logo & Copyright */}
          <div className="flex flex-col items-center">
            <Link href="/" className="mb-4">
              <LogoMs 
                fillFlower="fill-transparent"        
                fillLotus="fill-slate-300" 
              />
            </Link>
            <p className="text-sm text-slate-200">LOTUS Marketing Solutions <br/>dba. LOTUS Websites</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
