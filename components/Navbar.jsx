"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Home, User, FolderKanban, Mail } from "lucide-react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [mounted, setMounted] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-0.5rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      {mounted && !isDarkMode && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] transition-opacity duration-500 opacity-100">
          <Image
            src={assets.header_bg_color}
            alt="bg-color"
            className="w-full"
          />
        </div>
      )}

      <nav
        style={{
          backgroundColor: isScroll
            ? isDarkMode
              ? "#11001F88"
              : "#ffffff88"
            : "transparent",
          backdropFilter: isScroll ? "blur(10px)" : "none",
          transition: "all 0.3s",
        }}
        className="fixed top-0 w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
      >
        <h2 className="text-4xl font-bold">
          RIS<span style={{ color: "#a3e635" }}>.</span>
        </h2>

        {mounted && (
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ml-15 ${
              isScroll
                ? ""
                : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
            }`}
            style={{
              backgroundColor: isDarkMode ? "#11001F" : "#ffffff80",
            }}
          >
            <li>
              <a className="ovo flex items-center gap-2" href="#top">
                <Home size={18} />
                Home
              </a>
            </li>
            <li>
              <a className="ovo flex items-center gap-2" href="#about">
                <User size={18} />
                About
              </a>
            </li>
            <li>
              <a className="ovo flex items-center gap-2" href="#projects">
                <FolderKanban size={18} />
                My Projects
              </a>
            </li>
            <li>
              <a className="ovo flex items-center gap-2" href="#contact">
                <Mail size={18} />
                Contact me
              </a>
            </li>
          </ul>
        )}
        <div className="flex items-center gap-4">
          {mounted && (
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              <Image
                src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                alt="moon"
                className="w-6"
              />
            </button>
          )}

          {mounted && (
            <a
              href="#contact"
              className={`hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4 transition-colors duration-300
      ${
        isDarkMode
          ? "border border-white/50 text-white hover:bg-white/10"
          : "border border-gray-500 text-gray-900 hover:bg-gray-100"
      }`}
            >
              Contact
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="arrow"
                className="w-3"
              />
            </a>
          )}

          {mounted && (
            <button className="block md:hidden ml-3" onClick={openMenu}>
              <Image
                src={isDarkMode ? assets.menu_white : assets.menu_black}
                alt="menu"
                className="w-6"
              />
            </button>
          )}
        </div>

        {/* mobile menu */}
        {mounted && (
          <ul
            ref={sideMenuRef}
            className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${
              isDarkMode
                ? "bg-[#11001F] text-gray-200"
                : "bg-rose-50 text-gray-900"
            }`}
            style={{ transform: "translateX(100%)" }} // <-- hidden by default
          >
            {mounted && (
              <button className="absolute right-6 top-6" onClick={closeMenu}>
                <Image
                  src={isDarkMode ? assets.close_white : assets.close_black}
                  alt="cross"
                  className="w-5"
                />
              </button>
            )}
            <li>
              <a
                onClick={closeMenu}
                className="ovo flex items-center gap-2"
                href="#top"
              >
                <Home size={18} />
                Home
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                className="ovo flex items-center gap-2"
                href="#about"
              >
                <User size={18} />
                About
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                className="ovo flex items-center gap-2"
                href="#projects"
              >
                <FolderKanban size={18} />
                My Projects
              </a>
            </li>
            <li>
              <a
                onClick={closeMenu}
                className="ovo flex items-center gap-2"
                href="#contact"
              >
                <Mail size={18} />
                Contact me
              </a>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
