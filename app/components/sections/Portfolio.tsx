"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

const projects: Project[] = [
  {
    title: "Queueing & Data Entry Application",
    desc: "The Queueing & Data Entry Application, powered by Vue.js, simplifies queue management and data entry. With real-time updatesand a user-friendly interface, it streamlines the process,ensuring efficient queueing and data capture.",
    img: "/queueimg.png",
    btns: [{ text: "View Docs", url: "/queueing_docs.pdf" }],
  },
  {
    title: "Coffee Disease Detector",
    desc: "Efficiently detect coffee pests & diseases for healthier crops.",
    img: "/coffedisease.jpg",
    btns: [
      {
        text: "App Code",
        url: "https://github.com/dequilla3/coffee_disease_detector",
      },
      {
        text: "API Code",
        url: "https://github.com/dequilla3/CoffeeDisease",
      },
    ],
  },
  {
    title: "Medication Request and Dispensing System",
    desc: "Developed a medication request and dispensing system using Flutter, seamlessly integrated with an Arduino device for automated medication management.",
    img: "/bhw.png",
    btns: [
      {
        text: "App Code",
        url: "https://github.com/dequilla3/bhw_app",
      },
    ],
  },
];

export default function Porfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 sm:px-8 sm:py-16 md:px-64 md:py-64 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="sm:text-3xl md:text-5xl mb-5 text-center">
        My Porfolios
      </div>
      <div
        className={`md:pt-32 sm:text-center md:text-left ${
          inView ? "animate-left1" : "opacity-0"
        }`}
      >
        {projects.map((val, index) => (
          <div
            key={index}
            className="mr-5 rounded-xl bg-neutral-50 p-8 md:flex shadow-md mb-5 w-full transition-all duration-700 hover:shadow-xl"
          >
            <Image
              className="rounded-xl border sm:w-full md:w-auto"
              src={val.img}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <div className="sm:mt-5 md:mt-0 md:ml-5">
              <div className="font-bold sm:text-sm sm:text-center md:text-left md:text-xl">
                {val.title}
              </div>
              <div className="py-3">{val.desc}</div>
              <div className="flex sm:justify-center md:justify-normal">
                {val.btns.map((btn, index) => (
                  <a
                    key={index}
                    className="rounded-lg text-xs flex sm:justify-center md:justify-normal font-bold mr-5 hover:text-neutral-500"
                    href={btn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
