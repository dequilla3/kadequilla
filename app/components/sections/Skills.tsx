import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJava, DiJavascript } from "react-icons/di";
import {
  FaCss3,
  FaDocker,
  FaFigma,
  FaGit,
  FaJava,
  FaLinux,
  FaReact,
  FaVuejs,
} from "react-icons/fa";

export default function Skills() {
  return (
    <div className="h-96">
      <div className="font-bold lg:text-4xl 1xl:text-5xl text-center mb-16">
        Tech Stacks
      </div>
      <div className="flex justify-evenly">
        <a href="">
          <FaVuejs size={64} />
        </a>
        <a href="">
          <FaReact size={64} />
        </a>
        <a href="">
          <DiJavascript size={64} />
        </a>
        <a href="">
          <BiLogoTypescript size={64} />
        </a>
        <a href="">
          <DiJava size={64} />
        </a>
        <a href="">
          <FaFigma size={64} />
        </a>
        <a href="">
          <FaCss3 size={64} />
        </a>
        <a href="">
          <FaJava size={64} />
        </a>
        <a href="">
          <FaDocker size={64} />
        </a>
        <a href="">
          <FaLinux size={64} />
        </a>
        <a href="">
          <FaGit size={64} />
        </a>
      </div>
    </div>
  );
}
