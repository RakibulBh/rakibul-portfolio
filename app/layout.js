import { Inter } from "next/font/google";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Fira_Code } from "next/font/google";

const firacode = Fira_Code({
  subsets: ['latin'],
})

export const metadata = {
  title: "Rakibul's Portfolio",
  description: "Developer portfolio of Rakibul Bhuiyan, check out these amazing projects!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firacode.className}>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <Footer/>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
