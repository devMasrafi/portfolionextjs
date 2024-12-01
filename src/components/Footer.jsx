import Link from "next/link";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <main>
      <section className=" lg:my-[3rem] ">
        <div className="container mx-auto bg-darkBlue  lg:h-[34rem] lg:rounded-3xl text-white lg:px-[5rem] ">
          <div className=" lg:pt-[4rem] flex justify-between lg:mb-[5rem] ">
            <div>
              <h1 className="lg:text-8xl font-RobotoFont italic capitalize">
                let&#39;s talk
              </h1>
              <div className="relative font-RaleWayFont lg:mt-[3rem] ">
                <h3 className=" lg:text-xl capitalize tracking-wider mb-[2rem] before:content-[''] before:absolute before:w-[5rem] before:h-[2px] before:bg-white before:left-0 before:top-[2rem]  ">
                  use full links
                </h3>
                <ul className="lg:text-lg tracking-wider">
                  <li className="lg:my-2">
                    <Link href={"/works"}>works</Link>
                  </li>
                  <li>
                    <Link href={"/blogs"}>blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="font-RaleWayFont lg:mt-[7rem] ">
              <div></div>
              <h2 className="capitalize lg:text-2xl font-semibold opacity-75">
                get in touch with
              </h2>
              <div className="flex items-center lg:gap-x-6 capitalize lg:mt-1 ">
                <h3 className=" lg:ml-[3rem] lg:text-xl font-RaleWayFont font-semibold tracking-wider ">
                  Masrafi Mondol
                </h3>
                <button className=" lg:py-1 lg:px-4 border border-1-white rounded-md capitalize tracking-wider ">
                  developer
                </button>
              </div>
            </div>
          </div>
          <div className="lg:pt-[5rem] flex justify-between font-RaleWayFont ">
            <h2 className=" flex items-center lg:gap-x-2 tracking-widest capitalize">
              <FaRegCopyright className="lg:text-sm" /> Masrafi Mondol | devMasrafi | all rights
              Reserved
            </h2>
            <div className="flex lg:gap-x-6 items-center">
                <h2 className="capitalize  lg:tracking-wide opacity-70">made with</h2>
                <h3 className="lg:text-lg lg:tracking-wide lg:py-1 lg:px-4 border border-1-white rounded-md"> Next&#46;JS</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Footer;
