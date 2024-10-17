"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { motion } from "framer-motion";

const Header = () => {
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkTheme]);
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="Evently logo"
            width={128}
            height={38}
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center">
          <SignedIn>
            <div
              onClick={toggleTheme}
              className="mr-5 p-1 rounded-full cursor-pointer flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -180 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {!darkTheme ? (
                  <MdOutlineWbSunny className="h-6 w-6 text-yellow-500" />
                ) : (
                  <MdOutlineDarkMode className="h-6 w-6 text-primary-500" />
                )}
              </motion.div>
            </div>

            <UserButton afterSwitchSessionUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
