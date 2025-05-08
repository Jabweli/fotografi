import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ContactBtn = ({ className }: { className?: string }) => {
  const text = "CONTACT - SEND ME AN EMAIL";
  return (
    <Link href="mailto:example@gmail.com" className={`contact_btn ${className}`}>
      <FaArrowRight className="-rotate-45 text-[3.5rem] absolute" />
      <div className="text-base font-semibold w-40 h-40 flex justify-center animate-spinText">
        {text.split("").map((char, index) => {
          return (
            <span
              key={index}
              className="absolute"
              style={{
                transform: `rotate(${index * 12}deg)`,
                transformOrigin: "0.3rem 5rem",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </Link>
  );
};

export default ContactBtn;
