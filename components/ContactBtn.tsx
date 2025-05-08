import Link from "next/link";
import React from "react";

const ContactBtn = ({className}:{className?:string}) => {
  return (
    <Link href="/" className={`contact_btn ${className}`}>
      <p>CONTACT - SEND ME AN EMAIL</p>
    </Link>
  );
};

export default ContactBtn;
