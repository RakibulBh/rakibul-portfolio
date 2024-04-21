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
    <html lang="en" className="!scroll-smooth">
      <body className={`${firacode.className} flex`}>
        <div className="fixed ml-5 mt-5 h-screen">
          <Sidebar/>
        </div>
        <div>
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
