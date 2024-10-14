"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { motion } from "framer-motion";
import { MyContext } from "@/app/(root)/layout";

const Header = () => {
  const { theme, toggleTheme } = useContext(MyContext);

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
            {/* Remove the local toggle state, use theme */}
            <div
              onClick={toggleTheme}
              className="mr-5 p-1 rounded-full cursor-pointer flex items-center justify-center"
            >
              <motion.div
                key={theme === "light" ? "sun" : "moon"}
                initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.5, rotate: -180 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {theme === "light" ? (
                  <MdOutlineWbSunny className="h-6 w-6 text-yellow-500" />
                ) : (
                  <MdOutlineDarkMode className="h-6 w-6 text-gray-800" />
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
