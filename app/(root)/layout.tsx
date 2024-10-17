"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React, { createContext, useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background text-foregroundflex h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
