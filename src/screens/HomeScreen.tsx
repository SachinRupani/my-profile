import EmpHistory from "@/components/organisms/emp-history/EmpHistory";
import LibraryInfoCard from "@/components/organisms/library-info-card/LibraryInfoCard";
import ProfileCard from "@/components/organisms/profile-card/ProfileCard";
import ProjectsCard from "@/components/organisms/projects-card/ProjectsCard";
import SkillsCard from "@/components/organisms/skills-card/SkillsCard";
import TechBlogsCard from "@/components/organisms/tech-blogs-card/TechBlogsCard";

export default function HomeScreen() {
  return (
    <section className="flex-1 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <ProfileCard />
      <SkillsCard />
      <ProjectsCard />
      <EmpHistory />
      <TechBlogsCard />
      <LibraryInfoCard />
    </section>
  );
}
