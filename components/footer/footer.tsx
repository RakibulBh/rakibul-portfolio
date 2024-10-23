import { Github, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="h-40 flex items-center justify-center bg-[#12162B] text-white">
      <div className="space-y-2">
        <div className="flex justify-center gap-2">
          <Github />
          <Linkedin />
        </div>
        <p>© 2024, Rakibul Bhuiyan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
