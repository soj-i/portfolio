"use client";

import dynamic from "next/dynamic";
import ClickableImage from "@/components/molecules/ClickableImage";
import data from "@/data.json"
import NavigationBar from "@/components/organisms/NavigationBar";
import { useRouter } from "next/navigation";


const Snowfall = dynamic(() => import("@/components/snowfall.js"), { ssr: false });

export default function Hero() {

  const router = useRouter();

  const navItems = [
    { label: "About", href: "/about", ariaLabel: "Navigate to About page" },
    { label: "Skills", href: "/skills", ariaLabel: "Navigate to Skills page" },
    { label: "Projects", href: "/projects", ariaLabel: "Navigate to Projects page" },
    { label: "Contact", href: "/contact-me", ariaLabel: "Navigate to Contact page" },
    // { label: "Resume", href: "/resume", ariaLabel: "Navigate to Resume Link" }]
  ]
  return (
      // background container
      <div className="relative min-h-screen overflow-hidden bg-cover">
        {/* background Layers */}
        <div
          className="absolute inset-0 z-10 bg-cover bg-bottom"
          style={{
            backgroundImage: `
              url('/images/Trees-01.png'),
              url('/images/Mountains-01.png'),
              url('/images/BackgroundwithWater-01.png')`,
            backgroundSize: "cover",
          }}
          aria-hidden="true" //non interactive background
        ></div>

        {/* Personal info*/}
        <header
          className="relative mt-4 z-10 text-justify flex flex-wrap"
          aria-label="Portfolio header"
          style={{
            left: "calc(8vw - 5%)",
            width: "calc(50vw - 20%)",
          }}
        >
          <h1 
          aria-label="Portfolio Owner Soji Oduneye"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#fcbc30] w-fit shrink">
            {data.name}
          </h1>
          <div 
          aria-label="Computer Science and Music Major"
          className="text-right text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl shrink">
            {data.role}
          </div>
          <div 
          aria-label="Northwestern University"
          className="text-right text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl shrink">
            {data.university}
          </div>
        </header>

        {/* Clickable Image */}
        <main>
        <ClickableImage
          src="/images/giphy.gif"
          alt="snow penguin sprite"
          aria-label="Toggle snow effect"
          tabindex={0}
          width={300}
          height={300}
          style={{
            bottom: "110px",
            left: "200px",
          }}
          className="custom-class-for-image"

        />

<NavigationBar items={navItems} />
        {/* Button Container */}
        <nav
          aria-label="Navigation bar"
          className="absolute w-1/3 z-10 flex flex-col shrink max-w-xs md:max-w-sm lg:max-w-md space-y-4 text-center right-0 mr-36"
          style={{
            top: "calc(10vh - 8%)", // gradual position change
            marginRight: "calc(16vw - 50px)",
          }}
        >
          <button
            aria-label="Navigate to About page"
            className="w-full py-5 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
            style={{ boxShadow: "4px 4px 0px #ff8800" }}
            onClick={() => router.push('/about')}
          >
            About
          </button>

          <button
            aria-label="Navigate to Skills page"
            className="w-full py-5 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
            style={{ boxShadow: "4px 4px 0px #ff8800" }}
            onClick={() => router.push('/skills')}
          >
            Skills
          </button>

          <button
          aria-label="Navigate to Projects page"
            className="w-full py-5 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
            style={{ boxShadow: "4px 4px 0px #ff8800" }}
            onClick={() => router.push('/projects')}
          >
            Projects
          </button>
          <button
            aria-label="Navigate to Contact page" 
            className="w-full py-5 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
            style={{ boxShadow: "4px 4px 0px #ff8800" }}
            onClick={() => router.push('/contact-me')}
          >
            Contact
          </button>
          {/* <button
            aria-label="Navigate to Resume Link"
            className="w-full py-5 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
            style={{ boxShadow: "4px 4px 0px #ff8800" }}
          >
            Resume
          </button> */}
        </nav>

        {/* Snowfall Effect */}
        <div 
        aria-hidden="true"
        className="absolute inset-0 z-40 pointer-events-none">
          <Snowfall />
        </div>
        </main>
      </div>
      
  );
}