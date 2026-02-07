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
  { id: "linkedin", label: "Complete LinkedIn profile", done: true, points: 50, icon: "💼", href: "/linkedin" },
  { id: "first-sim", label: "Complete 1 job simulation", done: true, points: 100, icon: "🎯", href: "/job-simulation", badgeId: "sim-master" },
  { id: "mock-interview", label: "Do an AI mock interview", done: false, points: 150, icon: "🎤", href: "/mock-interviews", badgeId: "interview-pro" },
  { id: "projects", label: "Complete a technical project", done: false, points: 200, icon: "💻", href: "/skills", badgeId: "project-pioneer" },
  { id: "three-apps", label: "Apply to 3 internships", done: false, points: 75, icon: "📋", href: "/applications" },
];

export const badges = [
  { id: "sim-master", name: "Simulation Master", icon: "🎖️", description: "Completed your first professional job simulation.", unlocked: true },
  { id: "interview-pro", name: "Interview Pro", icon: "🏅", description: "Ace an AI mock interview session.", unlocked: false },
  { id: "project-pioneer", name: "Project Pioneer", icon: "🏆", description: "Built and verified a technical project.", unlocked: false },
  { id: "resume-ready", name: "Resume Ready", icon: "💎", description: "ATS score of 80+ reached.", unlocked: true },
];

export const quickLinks = [
  { title: "Career Center resources", href: "https://career.fsu.edu/students/undergraduate-students/programs-services", description: "Programs & services", icon: "📚" },
  { title: "NoleNetwork", href: "https://career.fsu.edu/nolenetwork", description: "FSU's job database", icon: "🏹" },
  { title: "Career Advising", href: "https://career.fsu.edu/advising", description: "Professional guidance", icon: "👥" },
];

export const rewards = [
  { name: "FSU football tickets", points: 500, unlocked: false, icon: "🏈" },
  { name: "LinkedIn Premium (1 mo)", points: 800, unlocked: false, icon: "💎" },
  { name: "Campus perks pack", points: 300, unlocked: true, icon: "🎁" },
];

export const pageResources = {
  resume: [
    { title: "FSU Resume Writing Guide", url: "https://career.fsu.edu/resumes" },
    { title: "Action Verbs List", url: "https://career.fsu.edu/sites/g/files/upcbnu746/files/Action%20Verbs.pdf" },
    { title: "ATS Compatibility Tips", url: "https://career.fsu.edu/blog/ats-friendly-resumes" },
  ],
  linkedin: [
    { title: "LinkedIn Profile Checklist", url: "https://career.fsu.edu/sites/g/files/upcbnu746/files/LinkedIn%20Profile%20Checklist.pdf" },
    { title: "FSU Alumni Networking", url: "https://www.linkedin.com/school/florida-state-university/people/" },
    { title: "Professional Headshot Services", url: "https://career.fsu.edu/students/undergraduate-students/programs-services/career-center-professional-headshots" },
  ],
  applications: [
    { title: "Interviewing for Internships", url: "https://career.fsu.edu/students/undergraduate-students/programs-services/career-advising/interviewing" },
    { title: "Job Search Strategies", url: "https://career.fsu.edu/students/undergraduate-students/programs-services/job-search" },
    { title: "NoleNetwork (Jobs)", url: "https://career.fsu.edu/nolenetwork" },
  ],
  skills: [
    { title: "LinkedIn Learning (Free for FSU)", url: "https://its.fsu.edu/linkedin-learning" },
    { title: "Technical Skills Workshops", url: "https://career.fsu.edu/students/undergraduate-students/programs-services/workshops" },
  ],
  interviews: [
    { title: "Prep for Technical Interviews", url: "https://career.fsu.edu/students/undergraduate-students/programs-services/mock-interviews" },
    { title: "STAR Method Guide", url: "https://career.fsu.edu/sites/g/files/upcbnu746/files/STAR%20Method.pdf" },
    { title: "Big Interview Platform", url: "https://fsu.biginterview.com/" },
  ],
};

export const skillsInProgress = [
  { name: "Technical Interviewing", progress: 65 },
  { name: "Resume Optimization", progress: 90 },
  { name: "LinkedIn Networking", progress: 40 },
  { name: "Project Management", progress: 25 },
];

export const applications = [
  { role: "Software Engineering Intern", company: "Google", date: "Jan 15, 2026", status: "Interview Scheduled" },
  { role: "Full Stack Developer", company: "Florida State IT", date: "Jan 20, 2026", status: "Under Review" },
  { role: "Product Manager Intern", company: "Microsoft", date: "Feb 1, 2026", status: "Offer" },
  { role: "Frontend Engineer", company: "Meta", date: "Feb 5, 2026", status: "Applied" },
];
