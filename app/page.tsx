// Components
import ExperiencesPage from "@/components/experiences-section/experiences-page";
import Footer from "@/components/footer/footer";
import LandingPage from "@/components/landing-section/landing-page";
import Navbar from "@/components/navbar/navbar";
import ProjectsPage from "@/components/projects-section/projects-page";
import TechnologiesPage from "@/components/technologies-section/technologies-page";
// import ReviewsPage from "@/components/reviews-section/reviews-page";

export default function Main() {
  return (
    <main className="w-full">
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
