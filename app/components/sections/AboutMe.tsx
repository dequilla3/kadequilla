"use client";

import { FaDesktop, FaMobile, FaWebAwesome } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.2,
  });

  return (
    <div
      className={`sm:py-16 md:py-64 md:px-64 bg-neutral-100 rounded-t-3xl transition-all duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="md:flex">
        <div ref={ref} className="md:w-1/2 sm:px-8 sm:pb-8 md:pb-0 md:px-0">
          <div
            className={`shadow flex md:w-80 py-6 px-4 bg-white rounded-lg mb-5 ${
              inView ? "animate-left1" : "opacity-0"
            }`}
          >
            <FaWebAwesome
              size={32}
              className="rounded-full bg-rose-500 p-2 text-white mr-3"
            />
            <div className="">
              <div className="font-bold">Full Stack Web Development</div>
              <div className="text-sm">3 Projects</div>
            </div>
          </div>

          <div
            className={`shadow flex md:w-80 py-6 px-4 bg-white rounded-lg mb-5 ${
              inView ? "animate-left2" : "opacity-0"
            }`}
          >
            <FaMobile
              size={32}
              className="rounded-full bg-blue-600 p-2 text-white mr-3"
            />
            <div className="">
              <div className="font-bold">Mobile Development</div>
              <div className="text-sm">2 Projects</div>
            </div>
          </div>

          <div
            className={`shadow flex md:w-80 py-6 px-4 bg-white rounded-lg mb-5 ${
              inView ? "animate-left3" : "opacity-0"
            }`}
          >
            <FaDesktop
              size={32}
              className="rounded-full bg-yellow-600 p-2 text-white mr-3"
            />
            <div className="">
              <div className="font-bold">Desktop App Development</div>
              <div className="text-sm">2 Projects</div>
            </div>
          </div>
        </div>
        <div className="sm:w-full sm:text-center sm:px-8 md:px-0 md:text-left md:w-1/2">
          <div className="sm:text-3xl md:text-5xl mb-5">What do I help?</div>
          <div className="tracking-wider mb-8">
            I design web applications, both front-end and back-end, as well as
            mobile applications using Flutter and desktop applications with .NET
            frameworks. My work involves creating intuitive user interfaces,
            implementing robust backend systems, and ensuring seamless
            performance across different platforms. For mobile applications, I
            leverage Flutter’s cross-platform capabilities to build high-quality
            apps for both iOS and Android. For desktop applications, I utilize
            .NET frameworks to deliver scalable and efficient software
            solutions.
          </div>

          <div className="flex sm:justify-center md:justify-normal">
            <div className="text-center mr-8 rounded-xl border p-4">
              <div className="text-3xl font-bold">7</div>
              <div className="text-xs">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
