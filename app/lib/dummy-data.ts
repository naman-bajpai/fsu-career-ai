// Dummy data for Career Journey — game-style (Duolingo-like)

export const student = {
  name: "Jordan",
  major: "Computer Science",
  level: 4,
  levelLabel: "Rising Star",
  points: 1240,
  xp: 1240, // same as points, displayed as XP in game UI
  pointsToNextLevel: 1600,
  streak: 5,
  dailyGoalXp: 20,
  dailyXpEarned: 15,
  percentileApplications: 78,
  atsScore: 82,
  semester: "Spring 2026",
  hearts: 5,
  maxHearts: 5,
};

export const milestones = [
  { id: "resume", label: "Build your resume", done: true, points: 50, icon: "📄", href: "/resume-helper" },
  { id: "linkedin", label: "Complete LinkedIn profile", done: true, points: 50, icon: "💼", href: "/resume-helper" },
  { id: "first-sim", label: "Complete 1 job simulation", done: true, points: 100, icon: "🎯", href: "/job-simulation" },
  { id: "mock-interview", label: "Do an AI mock interview", done: false, points: 150, icon: "🎤", href: "/mock-interviews" },
  { id: "three-apps", label: "Apply to 3 internships", done: false, points: 75, icon: "📋", href: "/applications" },
];

export const applications = [
  { company: "TechCorp", role: "Software Dev Intern", status: "Under Review", date: "Feb 1, 2026" },
  { company: "FSU ITS", role: "Student Developer", status: "Interview Scheduled", date: "Jan 28, 2026" },
  { company: "Local Startup", role: "Frontend Intern", status: "Applied", date: "Jan 25, 2026" },
];

export const skillsInProgress = [
  { name: "Python", progress: 85 },
  { name: "React", progress: 60 },
  { name: "Communication", progress: 70 },
];

export const quickLinks = [
  { title: "Mock interviews", href: "/mock-interviews", description: "AI-powered practice", icon: "🎤" },
  { title: "Job simulation", href: "/job-simulation", description: "Real-world scenarios", icon: "🎯" },
  { title: "Career Center resources", href: "https://career.fsu.edu/students/undergraduate-students/programs-services", description: "Programs & services", icon: "📚" },
  { title: "Resume helper", href: "/resume-helper", description: "Templates & ATS tips", icon: "📄" },
];

export const rewards = [
  { name: "FSU football tickets", points: 500, unlocked: false, icon: "🏈" },
  { name: "LinkedIn Premium (1 mo)", points: 800, unlocked: false, icon: "💎" },
  { name: "Campus perks pack", points: 300, unlocked: true, icon: "🎁" },
];
