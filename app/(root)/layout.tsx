"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React, { createContext, useEffect, useState } from "react";

// Update the context type
export const MyContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Apply the initial theme to the document's root element
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <MyContext.Provider value={{ theme, toggleTheme }}>
      <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}
