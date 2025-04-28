import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

interface SocialLinksProps {
  socials?: {
    facebook?: string;
    instagram?: string;
    tiktok?: string;
  };
}

const SocialLinks = ({ socials }: SocialLinksProps) => {
  if (!socials) return null;

  const socialData = [
    {
      platform: "facebook",
      url: `https://facebook.com/${socials.facebook}`,
      icon: faFacebook,
      exists: socials.facebook,
    },
    {
      platform: "instagram",
      url: `https://instagram.com/${socials.instagram}`,
      icon: faInstagram,
      exists: socials.instagram,
    },
    {
      platform: "tiktok",
      url: `https://tiktok.com/${socials.tiktok}`,
      icon: faTiktok,
      exists: socials.tiktok,
    },
  ];

  return (
    <div className="flex sm:gap-6 gap-4 mt-4">
      {socialData.map(
        ({ platform, url, icon, exists }) =>
          exists && (
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={icon}
                className="text-xl sm:scale-150 hover:scale-170 scale-120 transition-transform"
              />
            </a>
          )
      )}
    </div>
  );
};

export default SocialLinks;
