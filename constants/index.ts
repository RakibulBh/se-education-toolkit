export type NavlinkType = {
  name: string;
  href: string;
};

export const NAVLINKS: NavlinkType[] = [
  {
    name: "Labs",
    href: "/labs",
  },
  {
    name: "N/A",
    href: "/labs",
  },
  {
    name: "Resouces",
    href: "/labs",
  },
  {
    name: "About",
    href: "/about",
  },
];

export const FEATURES = [
  {
    id: 1,
    title: "AI-powered Learning",
    description:
      "Our AI-driven platform adapts to your learning style, providing personalized exercises and feedback that help you master software engineering concepts at your own pace.",
    imageUrl: "/stickers/features/ai.png",
    imageAlt: "AI learning icon",
    colSpan: 6,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Gamified Approach",
    description:
      "Earn points, unlock achievements, and climb leaderboards as you progress through interactive challenges that make learning engaging and fun.",
    imageUrl: "/stickers/features/game.png",
    imageAlt: "Gamification icon",
    colSpan: 3,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Interactive Exercises",
    description:
      "Practice with real-world scenarios and receive immediate feedback to reinforce your understanding of complex software engineering principles.",
    imageUrl: "/stickers/features/interactive.png",
    imageAlt: "Interactive exercises icon",
    colSpan: 3,
    delay: 0.6,
  },
  {
    id: 4,
    title: "Collaborative Projects",
    description:
      "Work with peers on team-based projects that simulate industry environments, developing crucial teamwork and communication skills alongside technical expertise.",
    imageUrl: "/stickers/features/friends.png",
    imageAlt: "Collaboration icon",
    colSpan: 6,
    delay: 0.8,
  },
];
