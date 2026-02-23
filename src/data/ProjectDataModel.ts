export interface ProjectDataModel {
  title: string;
  description: string;
  extraPoints?: string[];
  tags?: string[];
  link?: string;
  screenshots?: string[];
}

export const projectsData: ProjectDataModel[] = [
  {
    title: "Core Fix Mobile App",
    description:
      "Build better habits with Core Fix. Track steps, calories & distance via Health Connect, view 7-day trends, and stay inspired with daily health insights.",
    link: "https://core-fix-app.vercel.app/",
    tags: [
      "React Native",
      "Expo",
      "Typescript",
      "Supabase",
      "Personal Project",
    ],
    screenshots: [
      "https://res.cloudinary.com/ddfzbr1fm/image/upload/v1771815202/1_home_vchigv.jpg",
      "https://res.cloudinary.com/ddfzbr1fm/image/upload/v1771815212/3_steps_ld6og8.jpg",
      "https://res.cloudinary.com/ddfzbr1fm/image/upload/v1771815216/4_cals_ahtv4c.jpg",
    ],
  },
  {
    title: "Expo React Native Boilerplate",
    description:
      "Boilerplate for Expo React Native app with best practices, EAS related configurations, unit testing with jest and react native testing library, expo-router and tan-stack query",
    link: "https://github.com/SachinRupani/expo-react-native-app",
    tags: [
      "React Native",
      "Expo",
      "Typescript",
      "Open Source",
      "Personal Project",
    ],
  },
  {
    title: "VitaLyfe",
    description:
      "App focussed on improvement of the heart age (qrisk) by suggesting workouts, diet plan and tracking steps (integration of health connect and apple health).",
    link: "https://play.google.com/store/apps/details?id=com.lyfewellness",
    tags: ["React Native", "Lupin Digital Health"],
  },

  {
    title: "Admin Dashboard",
    description:
      "An admin portal containing login, patient listing with pagination and other admin users, plans, coupons CRUD operations",
    link: "https://newadmin.lyfeplus.in/",
    tags: ["Next.js", "Lupin Digital Health"],
  },
  {
    title: "Quick PDF Generator",
    description:
      "A simple quick pdf web app made using next.js, hero ui and typescript",
    link: "https://quick-pdf-generate.vercel.app/",
    tags: ["Next.js", "Typescript", "Open Source", "Personal Project"],
  },
  {
    title: "Nifty Trader",
    description:
      "App which shares a lot of stocks related information and has the necessary charts as well.",
    link: "https://play.google.com/store/apps/details?id=in.niftytrader",
    tags: ["Android", "Kotlin"],
  },
];
