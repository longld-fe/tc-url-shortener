import iconFacebook from "../assets/images/icon-facebook.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";

export const FOOTER_URLS = [
  {
    title: "Features",
    links: [
      { label: "Link Shortening", to: "/" },
      { label: "Branded Links", to: "/" },
      { label: "Analytics", to: "/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/" },
      { label: "Developers", to: "/" },
      { label: "Support", to: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/" },
      { label: "Our Team", to: "/" },
      { label: "Careers", to: "/" },
      { label: "Contact", to: "/" },
    ],
  },
];

export const SOCIALS = [
  { icon: iconFacebook, alt: "icon facebook", to: "/" },
  { icon: iconTwitter, alt: "icon twitter", to: "/" },
  { icon: iconPinterest, alt: "icon pinterest", to: "/" },
  { icon: iconInstagram, alt: "icon instagram", to: "/" },
];
