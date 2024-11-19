import { TECH_STACK } from "@/libs/tech-stack";
import SectionTitle from "../ui/section-title";
import { TechnologyComponent } from "./technology-component";
import { Technology } from "@/types";
import SectionDescription from "../ui/section-description";

export const TechnologiesContainer: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {TECH_STACK.map((tech: Technology) => (
        <TechnologyComponent key={tech.label} technology={tech} />
      ))}
    </div>
  );
};

const TechnologiesPage = () => {
  return (
    <section className="space-y-4 py-5 sm:py-10 md:py-20 lg:py-40 bg-[#12162B] px-8 sm:px-16 md:px-32 lg:px-64">
      <SectionTitle>Current Technologies</SectionTitle>
      <SectionDescription>
        Having experienced and experimented with many different technologies, I
        can confidently say I am able to learn and adapt quickly to change.
      </SectionDescription>
      <TechnologiesContainer />
    </section>
  );
};

export default TechnologiesPage;
