import data from "@/data.json";
import { Button } from "./button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";


export default function About() {
    return (
    <div className = "min-h-screen flex flex-col overflow-hidden p-10 mx-auto bg-gradient-to-b from-[#08f6f6] to-[#23395D]"
    style={{
        padding: "300px",
}}>
        <h1 className = "uppercase text-6xl md:text-7xl font-bold text-start md:text-center">
            About <span className ="text-[#fcbc30]">Me</span>
        </h1>
        <div className = "mt-6 md:mt-8">
            <div className = "mt-8 grid grid-cols-1 x1:grid-cols-2 gap-8">
                <div>
                    <div>
                        <h2 className = "font-semibold text-3xl x1:text-4xl leading-relaxed xl:leading-loose">
                            {data.bio}
                        </h2>
                        </div>
    
                    </div>

            </div>
        </div> 
    </div>
    );
}