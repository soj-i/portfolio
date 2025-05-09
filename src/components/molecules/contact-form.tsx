"use client";

import React from "react";
import data from "@/data.json";
import { ContactButton } from "@/components/molecules/contactButton";
import { SendIcon } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${data.email}?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
      aria-label="Contact Form"
    >
      {/* Name and Email Fields */}
      <div className="flex w-full gap-8">
        <input
          {...register("name")}
          required
          type="text"
          aria-required
          aria-placeholder="Your Name"
          placeholder="Your Name"
          className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
        />
        <input
          {...register("email")}
          required
          type="email"
          aria-required
          placeholder="Your Email"
          aria-placeholder="Your Email"
          className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
        />
      </div>

      {/* Subject Field */}
      <input
        {...register("subject")}
        required
        type="text"
        placeholder="Your Subject"
        aria-placeholder="Your Subject"
        className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
      />

      {/* Message Field */}
      <textarea
        {...register("message")}
        required
        aria-required
        placeholder="Your Message"
        aria-placeholder="Your Message"
        className="w-full resize-none h-48 p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
      />

      {/* Submit Button */}
      <div className="flex justify-center xl:justify-start w-full">
        <ContactButton
          type="submit"
          variant="default"
          size="lg"
          aria-label="Send Message"
          className="flex items-center justify-center gap-2"
        >
          Send Message
          <SendIcon className="w-6 h-6" />
        </ContactButton>
      </div>
    </form>
  );
}