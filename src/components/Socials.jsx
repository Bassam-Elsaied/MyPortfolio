import Link from "next/link";

//icon
import {
  RiGithubLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiInstagramLine,
} from "react-icons/ri";

function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/Bassam-Elsaied"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/bassam-elsayed-8227482b5/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
}

export default Socials;
