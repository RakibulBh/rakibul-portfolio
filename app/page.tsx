// Components
import ExperiencesPage from "@/components/experiences-section/experiences-page";
import ExpertisePage from "@/components/expertise-section/expertise-page";
import Footer from "@/components/footer/footer";
import LandingPage from "@/components/landing-section/landing-page";
import Navbar from "@/components/navbar/navbar";
import ProjectsPage from "@/components/projects-section/projects-page";
import ReviewsPage from "@/components/reviews-section/reviews-page";

export default function Main() {
  return (
    <main className="">
      <Navbar />
      <LandingPage />
      <ExpertisePage />
      <ProjectsPage />
      <ExperiencesPage />
      <ReviewsPage />
      <Footer />
    </main>
  );
}
