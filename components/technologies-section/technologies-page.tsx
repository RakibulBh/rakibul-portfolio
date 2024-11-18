import { TECH_STACK } from "@/libs/tech-stack";
import SectionTitle from "../ui/section-title";
import { TechnologyComponent } from "./technology-component";
import { Technology } from "@/types";

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
    <section className="space-y-4 py-40 bg-[#12162B] px-64">
      <SectionTitle>Current Technologies</SectionTitle>
      <p className="text-gray-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, tempore
        quisquam temporibus a.
      </p>
      <TechnologiesContainer />
    </section>
  );
};

export default TechnologiesPage;
