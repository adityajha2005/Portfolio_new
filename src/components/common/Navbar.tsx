"use client";

import React from "react";
import { Home, Info, Code, TerminalIcon, Download } from "lucide-react"; // Import the Download icon
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/darkmode";
import { FaBlog } from "react-icons/fa";
const navbarItems = [
    {
        name: "Home",
        href: "/",
        icon: Home,
    },
    {
        name: "Projects",
        href: "/projects",
        icon: TerminalIcon,
    },
    {
        name: "Skills",
        href: "/skills",
        icon: Code,
    },
    {
        name: "Blogs",
        href: "/blogs",
        icon: FaBlog,
    },
    {
        name: "About",
        href: "/about",
        icon: Info,
    },
];

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="z-50 lg:sticky max-w-[90%] m-auto lg:top-0">
            {/* iPad & Desktop Navbar */}
            <section className="flex w-full justify-between items-center m-auto p-2">
                <Link href="/" className="uppercase text-3xl font-bold tracking-widest relative">
                    AJ<span className="text-blue-700 font-bold text-8xl absolute -bottom-2">.</span>{" "}
                </Link>
                <div className="hidden lg:flex gap-5 min-w-96 justify-center items-center backdrop-blur-lg p-2">
                    {navbarItems.map((item) => {
                        const isActive = (pathname.includes(item.href) && item.href.length > 1) || pathname === item.href;
                        return (
                            <Link
                                href={item.href}
                                key={item.name}
                                className={`${isActive ? "text-blue-700" : "text-gray-800 dark:text-gray-200"} flex items-center justify-center gap-2 uppercase hover:text-blue-500 duration-200 ease-linear w-36 font-medium text-center`}
                            >
                                <item.icon /> {item.name}
                            </Link>
                        );
                    })}
                </div>
                <div className="flex items-center gap-4">
                    <Link
                    // href="Aditya_resume.pdf"
                        href=
                        "https://drive.google.com/file/d/1HTOETNB6g-rYdXJNlDjrY3LXSFfl9Whx/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 dark:text-gray-200 hover:text-blue-500 duration-200 eased-linear font-medium uppercase flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                         Resume
                    </Link>
                    {/* <a href="Aditya_resume.pdf" download="Resume">Resume</a> */}
                    <ModeToggle />
                </div>
            </section>
            {/* Mobile Navbar */}
            <section className="fixed z-50 md:w-[30rem] md:m-auto lg:hidden bottom-10 left-0 right-0 flex flex-wrap justify-center items-center w-full">
                <div className="flex gap-1 flex-wrap items-center w-[6  0%] justify-between p-2 bg-black/20 dark:bg-white/5 backdrop-blur-lg">
                    {navbarItems.map((item) => {
                        const isActive = (pathname.includes(item.href) && item.href.length > 1) || pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href} className={`${isActive ? "text-blue-700" : "text-gray-800 dark:text-gray-200"} p-2`}>
                                <item.icon />
                            </Link>
                        );
                    })}
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
