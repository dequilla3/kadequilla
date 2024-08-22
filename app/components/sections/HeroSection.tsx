"use client";

import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { DiDocker, DiJavascript, DiMysql, DiPostgresql } from "react-icons/di";
import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { FaJava, FaLinux } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { SiSpringboot } from "react-icons/si";

export default function HeroSection() {
  const techIconSize = 24;
  return (
    <div className="sm:text-center sm:px-8 sm:py-32 lg:py-64 md:px-64 md:text-left md:flex">
      <div className="md:w-1/2">
        <div className="font-bold tracking-widest mb-6 sm:text-3xl lg:text-4xl xl:text-5xl">
          Full-stack Software Developer
        </div>
        <div className=" text-neutral-500 tracking-widest mb-6">
          Hi, I&apos;m Kim Ariel Dequilla. A passionate Full-stack Software
          Developer based in General Santos City, Philippines 📍
        </div>

        <div className="flex sm:justify-center sm:mb-16 md:justify-start md:mb-16">
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

        <div className="sm:mb-14 md:flex w-full md:mb-6">
          <div className="font-bold md:hidden text-sm sm:w-full sm:mb-3">
            Tech Stacks
          </div>
          <div className="flex md:justify-between sm:justify-evenly w-full">
            <DiJavascript size={techIconSize} />
            <FaHtml5 size={techIconSize} />
            <FaCss3 size={techIconSize} />
            <BiLogoTypescript size={techIconSize} />
            <FaReact size={techIconSize} />
            <FaVuejs size={techIconSize} />
            <FaFigma size={techIconSize} />
            <FaJava size={techIconSize} />
            <SiSpringboot size={techIconSize} />
            <GrMysql size={techIconSize} />
            <DiPostgresql size={techIconSize} />
            <DiDocker size={techIconSize} />
            <FaLinux size={techIconSize} />
          </div>
        </div>

        <div className="flex sm:justify-center md:justify-normal mb-8 text-yellow-600">
          <div className="text-6xl font-bold mr-3">4+</div>
          <div className="font-bold text-left">
            YEARS <br />
            EXPERIENCE
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
