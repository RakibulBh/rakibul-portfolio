"use client";
// Components
import ExperiencesPage from "@/components/experiences-section/experiences-page";
import Footer from "@/components/footer/footer";
import LandingPage from "@/components/landing-section/landing-page";
import Navbar from "@/components/navbar/navbar";
import ProjectsPage from "@/components/projects-section/projects-page";
import TechnologiesPage from "@/components/technologies-section/technologies-page";
import { useEffect, useState } from "react";
// import ReviewsPage from "@/components/reviews-section/reviews-page";

export default function Main() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="w-full">
      <div
        id="cursor"
        style={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "white",
          position: "fixed",
          borderRadius: "9999px",
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none", // Ensures cursor doesn't interfere with interactions
          zIndex: 9999,
        }}
      />
      <Navbar />
      <LandingPage />
      <TechnologiesPage />
      <ProjectsPage />
      <ExperiencesPage />
      {/* <ReviewsPage /> */}
      <Footer />
    </main>
  );
}
