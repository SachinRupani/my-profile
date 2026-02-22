export interface EmploymentDataModel {
  company: string;
  role: string;
  duration: string;
  tags?: string[];
}

export const employmentData: EmploymentDataModel[] = [
  {
    company: "Vayuz Technologies (Code & Theory Team - Tonies Project)",
    role: "Sr. Product Engineer",
    duration: "Sep 2025 - Feb 2026 | Bengaluru (Remote)",
    tags: [
      "React Native",
      "Expo",
      "Typescript",
      "Jest",
      "Tan Stack Query",
      "Storybook",
    ],
  },
  {
    company: "PWC Acceleration Center India",
    role: "Lead Software Engineer",
    duration: "Jun 2025 - Aug 2025 | Bengaluru (Hybrid)",
    tags: ["React.js", "Typescript", "Salesforce", "Vite"],
  },
  {
    company: "Lupin Digital Health",
    role: "Software Development Engineer III",
    duration: "Mar 2023 - May 2025 | Bengaluru (Hybrid)",
    tags: ["React Native", "Next.js", "Typescript", "Jest", "Axios"],
  },
  {
    company: "EY GDS",
    role: "Associated Technical Lead",
    duration: "Dec 2021 - Feb 2023 | Noida (Remote)",
    tags: ["Android", "Kotlin", "MVVM", "Clean Architecture"],
  },
  {
    company: "Aubergine Solutions Private Limited",
    role: "Senior Software Engineer - Mobile",
    duration: "Feb 2021 - Nov 2021 | Ahmedabad (Remote)",
    tags: ["Android", "Kotlin", "MVVM", "Vimeo Integration", "ExoPlayer"],
  },
  {
    company: "WsCube Tech and Geekologix",
    role: "Android & React Native Developer",
    duration: "May 2015 - Jan 2021 | Jodhpur (Onsite)",
    tags: ["Android", "Kotlin", "JAVA", "MVVM", "MVP", "LiveData"],
  },
];
