import HomeScreen from "@/screens/HomeScreen";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Sachin Rupani",
    jobTitle: "Mobile App Engineer",
    url: "https://www.sachinrupani.com",
    image: "https://www.sachinrupani.com/profile_pic_v2.webp",
    sameAs: [
      "https://www.linkedin.com/in/sachinrupani",
      "https://github.com/sachinrupani",
    ],
    knowsAbout: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Expo",
      "Android",
      "Kotlin",
      "iOS",
    ],
  },
};

export default function MainAppPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <main className="min-h-screen bg-background px-4 py-5 sm:px-6 sm:py-8 lg:px-10">
        <HomeScreen />
      </main>
    </>
  );
}
