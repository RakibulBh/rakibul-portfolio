import { Inter } from "next/font/google";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Fira_Code } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const firacode = Fira_Code({
  subsets: ['latin'],
})

export const metadata = {
  title: "Rakibul's Portfolio",
  description: "Developer portfolio of Rakibul Bhuiyan, check out these amazing projects!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${firacode.className} flex h-full pr-0 md:pr-10`}>
        <div className="hidden md:flex p-10 items-center  flex-col justfy-center">
          <Sidebar/>
        </div>
x        <div className="h-full w-full">
          <ActiveSectionContextProvider>
            <Header/>
            {children}
            <Footer/>
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
