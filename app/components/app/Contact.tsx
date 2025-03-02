"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import React from 'react'
import ContactForm from "./contact-form";

export default function Contact() {
    const words = [
        {
          text: "Contact",
        },
        {
          text: "With",
        },
        {
          text: "us",
        },
        {
          text: "And",
        },
        {
          text: "Send",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
          text: "Message",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-[40rem]  ">

    <TypewriterEffectSmooth words={words} />
    <ContactForm />
  </div>
);
}
