import { Link, MailIcon, MapIcon, PhoneIcon, SendIcon } from "lucide-react";
import data from "@/data.json";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/contact-form";

export default function ContactMe() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden p-10 mx-auto bg-gradient-to-b from-[#023e69] to-[#032047]">
      <h1 className="uppercase text-4xl md:text-7xl font-bold text-start md:text-center">
        Get In <span className="text-[#fcbc30]">Touch</span>
      </h1>

      <div
        className="mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-16"
        style={{
          paddingLeft: "150px",
        }}
      >
        <div>
          <h2 className="uppercase font-semibold text-3xl xl:text-4xl">
            Don&apos;t be shy!
          </h2>
          <p className="mt-2 text-lg">Feel free to get in touch with me.</p>
          <div className="mt-12 flex flex-col gap-8">
            <div className="flex space-x-4">
              <MapIcon className="size-10 mr-4 text-[#fcbc30]" />
              <div>
                <p className="uppercase text-gray-400 text-2x1">Location</p>
                <p className="text-1g font-semibold">{data.location}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <MailIcon className="size-10 mr-4 text-[#fcbc30]" />
              <div>
                <p className="uppercase text-gray-400 text-2x1">Email</p>
                <p className="text-1g font-semibold">{data.email}</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <PhoneIcon className="size-10 mr-4 text-[#fcbc30]" />
              <div>
                <p className="uppercase text-gray-400 text-2x1">Phone</p>
                <p className="text-1g font-semibold">{data.phone}</p>
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>

      {/* "Thanks for visiting!" Text positioned at the bottom-right of this section */}
      <div className="relative h-32">
      <p className="text-gray-400 text-lg absolute right-4 bottom-2">
        Thanks for visiting : ]
      </p>
    </div>


    </div>
  );
}
