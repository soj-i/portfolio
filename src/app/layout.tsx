import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import './globals.css';
import { SnowfallProvider } from "./contexts/SnowfallContext";


const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
   subsets: ["latin"],
  });

export const metadata: Metadata = {
  title: "soji's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className = {poppins.className}>
        
        <div className = "text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden no-scrollbar">
          <SnowfallProvider>
          {children}
          </SnowfallProvider>
        </div>
        </body>
    </html>
  );
}
