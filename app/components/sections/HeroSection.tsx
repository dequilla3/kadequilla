"use client";

import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJava, DiJavascript } from "react-icons/di";
import {
  FaCss3,
  FaDocker,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
} from "react-icons/fa";

export default function HeroSection() {
  const techIconSize = 24;
  return (
    <div className="py-64 flex xl:pb-96">
      <div className="w-1/2">
        <div className="font-bold flex tracking-widest mb-3 lg:text-4xl xl:text-5xl">
          Front End Developer
        </div>
        <div className=" text-neutral-500 tracking-widest mb-2">
          {
            "Hi, I'm Kim Ariel Dequilla—a passionate Front End Developer dedicated to transforming ideas into stunning, user-friendly websites. With a knack for blending creativity with technical expertise, I specialize in building responsive, high-performance interfaces that captivate and convert."
          }
        </div>
        <div className="flex mt-3">
          <a
            className="mr-1"
            href="https://www.linkedin.com/in/kadequilla"
            target="_blank"
          >
            <FaLinkedin className="text-sky-700" size={34} />
          </a>
          <a href="https://github.com/dequilla3" target="_blank">
            <FaGithub className="text-purple-950" size={34} />
          </a>
        </div>

        <div className="flex mt-20 w-full">
          <div className="font-bold w-1/4">Tech Stacks |</div>
          <div className="flex justify-evenly w-full">
            <a href="">
              <DiJavascript size={techIconSize} />
            </a>
            <a href="">
              <BiLogoTypescript size={techIconSize} />
            </a>
            <a href="">
              <FaHtml5 size={techIconSize} />
            </a>
            <a href="">
              <FaCss3 size={techIconSize} />
            </a>
            <a href="">
              <FaReact size={techIconSize} />
            </a>
            <a href="">
              <DiJava size={techIconSize} />
            </a>
            <a href="">
              <FaFigma size={techIconSize} />
            </a>
            <a href="">
              <FaDocker size={techIconSize} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <Image
          className="circle rounded-full shadow-2xl shadow-pink-200"
          src="/me.jpg"
          width={450}
          height={450}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
