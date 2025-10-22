import { Link } from "@tanstack/react-router";
import FooterLogo from "../../assets/images/logo-footer.svg";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconPinterest from "../../assets/images/icon-pinterest.svg";

const footerLinks = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

const socialIcons = [
  { src: iconFacebook, alt: "Facebook" },
  { src: iconTwitter, alt: "Twitter" },
  { src: iconPinterest, alt: "Pinterest" },
  { src: iconInstagram, alt: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#232127] px-6 pt-[4.4rem] pb-16">
      <div className="mx-auto flex flex-col items-center text-center text-white gap-12 md:flex-row md:items-start md:justify-between md:text-left md:gap-6 md:mx-16">
        <Link to="/">
          <img src={FooterLogo} alt="Shortly" />
        </Link>
        <div className="flex flex-col gap-12 text-center md:flex-row md:text-left md:gap-18 md:ml-32">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-base font-bold mb-5">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="text-gray-400 text-sm no-underline transition-colors duration-300 hover:text-cyan-400"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-6 mt-8 md:mt-0">
          {socialIcons.map(({ src, alt }) => (
            <Link
              key={alt}
              to="/"
              className="transition-all duration-300 hover:filter hover:filter-[invert(63%)_sepia(76%)_saturate(408%)_hue-rotate(131deg)_brightness(140%)_contrast(94%)]"
            >
              <img src={src} alt={alt} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
