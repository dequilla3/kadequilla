"use client";

import { BiCode } from "react-icons/bi";
import Image from "next/image";
import { SlDocs } from "react-icons/sl";
import { useInView } from "react-intersection-observer";

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
      <div className="text-5xl mb-5 text-center">My Porfolios</div>
      <div
        className={`md:pt-32 sm:text-center md:text-left ${
          inView ? "animate-left1" : "opacity-0"
        }`}
      >
        <div className="mr-5 rounded-xl bg-neutral-50 p-8 md:flex shadow-md mb-5 w-full transition-all duration-700 hover:shadow-xl">
          <Image
            className="rounded-xl border sm:w-full md:w-auto"
            src="/queueimg.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <div className="sm:mt-5 md:mt-0 md:ml-5">
            <div className="font-bold sm:text-sm sm:text-center md:text-left md:text-xl">
              Queueing & Data Entry Application
            </div>
            <div className="py-3">
              The Queueing & Data Entry Application, powered by Vue.js,
              simplifies queue management and data entry. With real-time updates
              and a user-friendly interface, it streamlines the process,
              ensuring efficient queueing and data capture.
            </div>
            <a
              className="rounded-lg text-xs flex sm:justify-center md:justify-normal font-bold mr-5 hover:text-neutral-500"
              href="/queueing_docs.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Docs <SlDocs className="ml-1" size={14} />
            </a>
          </div>
        </div>

        <div className="mr-5 rounded-xl bg-neutral-50 p-8 md:flex shadow-md mb-5 w-full transition-all duration-700 hover:shadow-xl">
          <Image
            className="rounded-xl border sm:w-full md:w-auto"
            src="/coffedisease.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <div className="sm:mt-5 md:mt-0 md:ml-5">
            <div className="font-bold sm:text-sm sm:text-center md:text-left md:text-xl">
              Coffee Disease Detector
            </div>
            <div className="py-3">
              Efficiently detect coffee pests & diseases for healthier crops.
            </div>
            <div className="flex sm:justify-center md:justify-normal">
              <a
                className="rounded-lg text-xs flex sm:justify-center md:justify-normal font-bold mr-5 hover:text-neutral-500"
                href="https://github.com/dequilla3/coffee_disease_detector"
                target="_blank"
                rel="noopener noreferrer"
              >
                APP Code <BiCode className="ml-1" size={14} />
              </a>

              <a
                className="rounded-lg text-xs flex sm:justify-center md:justify-normal font-bold mr-5 hover:text-neutral-500"
                href="https://github.com/dequilla3/CoffeeDisease"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Code <BiCode className="ml-1" size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="mr-5 rounded-xl bg-neutral-50 p-8 md:flex shadow-md mb-5 w-full transition-all duration-700 hover:shadow-xl">
          <Image
            className="rounded-xl sm:w-full md:w-auto"
            src="/bhw.png"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <div className="sm:mt-5 md:mt-0 md:ml-5">
            <div className="font-bold sm:text-sm sm:text-center md:text-left md:text-xl">
              Medication Request and Dispensing System
            </div>
            <div className="py-3">
              Developed a medication request and dispensing system using
              Flutter, seamlessly integrated with an Arduino device for
              automated medication management.{" "}
            </div>
            <a
              className="rounded-lg text-xs flex sm:justify-center md:justify-normal font-bold mr-5 hover:text-neutral-500"
              href="https://github.com/dequilla3/bhw_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View APP Code <BiCode className="ml-1" size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
