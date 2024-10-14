import React from "react";

interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a772419c36abe54e112da22255d334e21580b035e21f55468d4e3e0c8e7e4ff7?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63",
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d00e000e587b839ce44d8e2c944c00e02974f18508a54175b0efc764958c325a?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63",
    href: "#",
  },
  {
    name: "GitHub",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a2616f2737596c552ca4a47182bd280bac11056ccce5ae9367efb5ba41a2a44?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63",
    href: "#",
  },
];

const SocialLinks: React.FC = () => {
  return (
    <nav className="social-links">
      <ul className="social-list">
        {socialLinks.map((link, index) => (
          <li key={index} className="social-item">
            <a
              href={link.href}
              className={`social-link social-link-${link.name.toLowerCase()}`}
              aria-label={link.name}
            >
              <img src={link.icon} alt="" className="social-icon" />
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .social-links {
          display: flex;
          padding-left: 84px;
        }
        .social-list {
          display: flex;
          gap: 22px;
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .social-item {
          width: 22px;
        }
        .social-link {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
        }
        .social-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 21px;
          flex: 1;
        }
        .social-link-twitter .social-icon {
          aspect-ratio: 1.05;
          width: 22px;
        }
      `}</style>
    </nav>
  );
};

export default SocialLinks;
