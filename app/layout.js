import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rakibul's Portfolio",
  description: "Developer portfolio of Rakibul Bhuiyan, check out these amazing projects!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  );
}
