"use client";

import { MdAttachEmail, MdEmail } from "react-icons/md";
import { useInView } from "react-intersection-observer";

export default function ContactMe() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.2,
  });
  return (
    <div
      ref={ref}
      className={`transition-all bg-neutral-100 duration-1000 sm:px-8 sm:py-16 md:px-32 md:py-64 md:rounded-t-full ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="sm:text-3xl md:text-5xl text-center md:pb-16">Contact Me?</div>
      <div className="md:flex justify-center">
        <div className="md:text-2xl rounded-lg shadow-sm py-4 px-6 bg-white m-5">
          📧 deqkim4@gmail.com
        </div>
        <div className="md:text-2xl rounded-lg shadow-sm py-4 px-6 bg-white m-5">
          ☎️ 09183893886
        </div>
      </div>
    </div>
  );
}
