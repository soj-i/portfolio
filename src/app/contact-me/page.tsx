import { MailIcon, MapIcon, PhoneIcon} from "lucide-react";
import data from "@/data.json";
import ContactForm from "@/components/molecules/contact-form";
import HeroButton from "@/components/molecules/heroButton";

export default function ContactMe() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden p-10 mx-auto bg-gradient-to-b from-[#023e69] to-[#032047]">
      <HeroButton
        href="/"
        label="back"
        className="w-1/5 shrink-1 min-w-[100px] py-2 px-4 md:text-base lg:text-lg xl:text-xl rounded-full text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] sm:bg-red-500 bg-[#fcbc30] md:bg-[#fcbc30] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
        >
        </HeroButton>
      <h1 className="uppercase sm:text-center text-4xl md:text-7xl font-bold text-start md:text-center">
        Get In <span className="text-[#fcbc30]">Touch</span>
      </h1>

      <div
        className="mt-12 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-16"
        style={{
          paddingLeft: "100px",
        }}
      >
        <div>
          <h2 className="uppercase sm:text-center font-semibold text-3xl xl:text-4xl">
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
              <MailIcon className="size-10 lg:mr-4 sm:mr-auto text-[#fcbc30]" />
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
