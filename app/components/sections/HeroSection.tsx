"use client";

import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJavascript } from "react-icons/di";
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

export default function HeroSection() {
  const techIconSize = 22;
  return (
    <div className="sm:text-center sm:py-32 md:text-left md:py-64 md:flex xl:pb-96">
      <div className="md:w-1/2">
        <div className="font-bold tracking-widest mb-4 sm:text-3xl lg:text-4xl xl:text-5xl">
          Front End Developer
        </div>
        <div className=" text-neutral-500 tracking-widest mb-4">
          Hi, I&apos;m Kim Ariel Dequilla. A passionate Front-end Developer
          based in General Santos City, Philippines 📍
        </div>
        <div className="flex mt-3 sm:justify-center md:justify-start">
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

        <div className="md:flex mt-16 w-full mb-8">
          <div className="font-bold md:w-1/4 text-sm sm:w-full sm:mb-3">
            Tech Stacks
          </div>
          <div className="flex justify-evenly w-full">
            <a href="">
              <DiJavascript size={techIconSize} />
            </a>
            <a href="">
              <FaHtml5 size={techIconSize} />
            </a>
            <a href="">
              <FaCss3 size={techIconSize} />
            </a>
            <a href="">
              <BiLogoTypescript size={techIconSize} />
            </a>
            <a href="">
              <FaReact size={techIconSize} />
            </a>
            <a href="">
              <FaVuejs size={techIconSize} />
            </a>
            <a href="">
              <FaFigma size={techIconSize} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:w-1/2">
        <Image
          className="circle rounded-full shadow-lg border-4 border-neutral-800"
          src="/me.jpg"
          width={450}
          height={450}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
