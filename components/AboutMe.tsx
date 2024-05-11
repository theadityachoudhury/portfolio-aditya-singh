"use client";
import { Camera, SquareArrowRight } from "lucide-react";
import SectionName from "./SectionName";
import { useState } from "react";
import Link from "next/link";

export default function AboutMe() {
    const [kiitDigital, setKiitDigital] = useState("KIIT Digital");
    function handleKIITDigital() {
        if (kiitDigital === "KIIT Digital") setKiitDigital("कीट डिजिटल");
        else if (kiitDigital === "कीट डिजिटल") setKiitDigital("କିଟ୍ ଡିଜିଟାଲ୍");
        else setKiitDigital("KIIT Digital");
    }
    return (
        <div className="container px-5 sm:px-48 mb-10 sm:mx-auto">
            <SectionName name="About Me" side="left" />
            <div className="flex flex-col space-y-3 px-5">
                <p className="font-light text-3xl">Heyy, I am Aditya!!</p>
                <div className="font-light">
                    <p className="text-gray-400 text-2xl">about:</p>
                    <div className="px-3 text-xl">
                        <p className="flex gap-2"><SquareArrowRight className="" />Photographer</p>
                        <p className="flex gap-2"><SquareArrowRight className="" />CS Undergrad at KIIT University</p>
                        <p className="flex gap-2"><SquareArrowRight className="" />Software Developer</p>
                    </div>
                </div>
                <div className="font-light">
                    <p className="text-gray-400 text-2xl">currently:</p>
                    <div className="px-3 text-xl">
                        <div className="flex space-x-1">
                            <p className="flex gap-2"><SquareArrowRight className="" />Working at </p>
                            <p className="underline cursor-pointer" onClick={handleKIITDigital}>{kiitDigital}</p>
                        </div>

                        <p className="flex gap-2"><SquareArrowRight className="" />improving my photography📷 skills</p>
                        <p className="flex gap-2"><SquareArrowRight className="" />Software Developer</p>
                    </div>
                </div>

                <div className="text-lg">
                    <p>For internship/paid work, hit me at <Link className="text-blue-600" href="mailto:2129010@kiit.ac.in" target="_blank">email</Link>/<Link className="text-blue-600" href="https://instagram.com/singhaditya.__" target="_blank">instagram</Link></p>
                </div>
            </div>
        </div>
    )
}