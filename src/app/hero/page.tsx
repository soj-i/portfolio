import Image from 'next/image';
import data from '@/data.json';
import DynamicText from '@/components/ui/moving-text-logic';
import dynamic from 'next/dynamic';

// Dynamically import Snowfall with SSR disabled
const Snowfall = dynamic(() => import('@/components/snowfall.js'), { ssr: false });

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden p-10 mx-auto bg-cover">
      {/* Background Layers */}
      <div
        className="absolute inset-0 z-10 bg-cover bg-bottom"
        style={{
          backgroundImage: `
            url('/images/Trees-01.png'),
            url('/images/Mountains-01.png'),
            url('/images/BackgroundwithWater-01.png')`,
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Text Layer (Behind the Oras Layer) */}
      <div className="relative z-10 flex flex-col max-w-2xl ml-0 text-left xl:text-left gap-8 px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl xl:text-7xl font-bold text-[#fcbc30] leading-snug md:leading-normal lg:leading-loose">
          {data.name}
          <br />
          <br />
          <span className="text-white">{data.role}</span>
          <br/>
          <span className="text-white">{data.university}</span>
          <span className="text-white">
            <br />
            <DynamicText />
          </span>
        </h1>
      </div>

      {/* Oras Layer (Foreground) */}
      <div
        className="absolute inset-0 z-30 bg-cover bg-bottom"
        style={{
          backgroundImage: "url('/images/Oras-01.png')",
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Button Container */}
      <div className="absolute top-1/3 right-4 md:right-10 lg:right-20 xl:right-36 transform -translate-y-1/2 flex flex-col space-y-6 z-30 items-center text-center px-4 w-full max-w-sm">
  <a
    href="#about"
    className="w-full py-4 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
    style={{ boxShadow: '4px 4px 0px #ff8800' }}
  >
    About
  </a>
  <a
    href="#skills"
    className="w-full py-4 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
    style={{ boxShadow: '4px 4px 0px #ff8800' }}
  >
    Skills
  </a>
  <a
    href="#projects"
    className="w-full py-4 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
    style={{ boxShadow: '4px 4px 0px #ff8800' }}
  >
    Projects
  </a>
  <a
    href="#contact-me"
    className="w-full py-4 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
    style={{ boxShadow: '4px 4px 0px #ff8800' }}
  >
    Contact
  </a>
  <a
    href="/images/Olusoji_Oduneye_Jun2026.pdf"
    target="_blank"
    className="w-full py-4 px-8 text-sm md:text-base lg:text-lg xl:text-xl rounded-full bg-[#fcbc30] text-white font-semibold text-center transition-transform transform hover:scale-110 shadow-lg border-4 border-[#ff8800] hover:bg-[#ff8800] hover:border-[#fcbc30] hover:shadow-xl"
    style={{ boxShadow: '4px 4px 0px #ff8800' }}
  >
    Resume
  </a>
</div>





     

     
    <div className="absolute z-40 bottom-20 right-0 md:right-30 lg:right-30 xl:right-50">
      <Image
        src="/images/giphy.gif"
        alt="Animated sprite"
        className="w-[20vw] h-[20vw] max-w-[64px] max-h-[64px] md:max-w-[128px] md:max-h-[128px] lg:max-w-[256px] lg:max-h-[256px]"
        width={10}
        height={10}
      />
    </div>




      {/* Snowfall Effect (Top Layer) */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <Snowfall />
      </div>
    </div>
  );
}
