import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center md:justify-start gap-4">
      <a
        href="https://github.com/OsherSo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-500 hover:text-slate-800 transition duration-300"
      >
        <FaGithubSquare className="h-8 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/osherso/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-500 hover:text-slate-800 transition duration-300"
      >
        <FaLinkedin className="h-8 w-8" />
      </a>
      <a
        href="https://x.com/OsherCode"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-500 hover:text-slate-800 transition duration-300"
      >
        <FaTwitterSquare className="h-8 w-8" />
      </a>
    </div>
  );
};

export default SocialLinks;
