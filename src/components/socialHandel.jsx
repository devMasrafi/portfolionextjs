import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";


const SocialHandel = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link href={"mailto:masrafisw@gmail.com"}>
          <h2 className="capitalize ">Contact me</h2>
          <p className="flex items-center lg:gap-x-2 lg: lg:text-lg">
            <IoMdMailUnread />
            masrafisw@gmail.com
          </p>
        </Link>
      </div>
      <div>
        <h2 className="capitalize">follow me</h2>
        <Link
          href={"https://www.linkedin.com/in/masrafi-mondol/"}
          className="flex items-center lg:gap-x-2 lg: lg:text-lg"
        >
          <FaLinkedin className="lg:text-xl " /> Masrafi Mondol
        </Link>
      </div>
      <div>
        <Link target="_blank" href={"https://github.com/devMasrafi"}>
          <h2 className="capitalize">see my works</h2>
          <p className="flex items-center lg:gap-x-3 lg:text-lg">
            <FaGithub /> github
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SocialHandel;
