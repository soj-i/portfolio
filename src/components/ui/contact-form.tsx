"use client";

import React from 'react';
import data from "@/data.json";
import { Button } from './button';
import { SendIcon } from 'lucide-react';
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
      className="md:cols-span-2 flex flex-col gap-8"
    >
      <div className="flex w-full gap-8">
        <input
          {...register("name")}
          required
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
        />
        
        <input
          {...register("email")}
          required
          type="email"
          placeholder="Your Email"
          className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
        />
      </div>

      <input
        {...register("subject")}
        required
        type="text"
        placeholder="Your Subject"
        className="w-full p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
      />

      <textarea
        {...register("message")}
        required
        placeholder="Your Message"
        className="w-full h-48 p-4 bg-[#4A4A4A] text-white rounded-3xl border-none focus:outline-none focus:ring-2 focus:ring-[#fcbc30] focus:ring-opacity-50"
      />

      <div className="flex justify-center xl:justify-start">
        <Button
          type="submit"
          className="rounded-full uppercase font-semibold text-xl py-4 px-48 bg-[#fcbc30] text-white transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
          style={{
            boxShadow: "4px 4px 0px #ff8800",
          }}
        >
          Send Message <SendIcon className="ml-2 w-6 h-6" />
        </Button>
      </div>
    </form>
  );
}
