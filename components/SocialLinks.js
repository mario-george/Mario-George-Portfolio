// import Link from next for navigation
import Link from "next/link";

// icons import
import {
  RiWhatsappLine,
  RiTelegramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
// social icons
const SocialLinks = () => {
  return (
    <div className="flex items-center transition-all duration-300 gap-x-6 text-2xl ">
      {/* 
          The rel="noopener noreferrer" attribute is a security measure that prevents
           the new page from being able to access the window object of the original page
          */}
      <a
        href={"https://www.linkedin.com/in/mario-george-3570151a7"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent"
      >
        <RiLinkedinBoxFill />
      </a>
      <a
        href={"https://t.me/Mario_G_David"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent"
      >
        <RiTelegramFill />
      </a>
      <a
        href={"https://wa.me/201127648141"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent"
      >
        <RiWhatsappLine />
      </a>
    </div>
  );
};

export default SocialLinks;
