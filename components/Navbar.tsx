"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="p-5 relative"> {/* Added relative positioning */}
            <div className="flex sm:justify-around">
                <h1 className="text-3xl font-bold text-center">adityakumarsingh</h1>
                <div className="hidden sm:flex space-x-5 justify-between text-xl text-slate-200">
                    <a href="#" className="hover:text-blue-600">Home</a>
                    <a href="#" className="hover:text-blue-600">Github</a>
                    <a href="#" className="hover:text-blue-600">Resume</a>
                </div>
                <div className="flex sm:hidden p-3" onClick={() => { setShowMenu(!showMenu) }}>
                    <ChevronDown />
                </div>
            </div>
            {showMenu && <div className="sm:hidden fixed top-16 left-56 bg-slate-800 backdrop-blur-sm flex flex-col rounded-md p-3 max-w-32 mt-2 text-xl space-y-3"> {/* Added absolute positioning */}
                <a href="#" className="hover:text-blue-600">Home</a>
                <a href="#" className="hover:text-blue-600">Github</a>
                <a href="#" className="hover:text-blue-600">Experience</a>
            </div>}
        </div>
    )
}
