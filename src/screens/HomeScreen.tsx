import EmpHistoryCard from "@/components/organisms/emp-history-card/EmpHistoryCard";
import LibraryInfoCard from "@/components/organisms/library-info-card/LibraryInfoCard";
import ProfileCard from "@/components/organisms/profile-card/ProfileCard";
import ProjectsCard from "@/components/organisms/projects-card/ProjectsCard";
import SkillsCard from "@/components/organisms/skills-card/SkillsCard";
import TechBlogsCard from "@/components/organisms/tech-blogs-card/TechBlogsCard";

export default function HomeScreen() {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
      <div>
        <ProfileCard />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <SkillsCard colorVariant="secondary" />
        <ProjectsCard colorVariant="primary" />
        <EmpHistoryCard colorVariant="secondary" />
        <TechBlogsCard colorVariant="primary" />
        <LibraryInfoCard colorVariant="primary" />
      </div>
    </section>
  );
}
