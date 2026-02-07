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
  { role: "Software Engineering Intern", company: "Google", date: "Jan 15, 2026", status: "Interview Scheduled", daysAgo: 23 },
  { role: "Full Stack Developer", company: "Florida State IT", date: "Jan 20, 2026", status: "Under Review", daysAgo: 18 },
  { role: "Product Manager Intern", company: "Microsoft", date: "Feb 1, 2026", status: "Offer", daysAgo: 6 },
  { role: "Frontend Engineer", company: "Meta", date: "Feb 5, 2026", status: "Applied", daysAgo: 2 },
];

// Career Path Matcher Data
export const careerQuizQuestions = [
  {
    id: 1,
    question: "What energizes you most?",
    options: [
      { text: "Solving complex technical problems", tags: ["engineering", "data"] },
      { text: "Leading teams and driving strategy", tags: ["management", "product"] },
      { text: "Creating beautiful, intuitive experiences", tags: ["design", "frontend"] },
      { text: "Understanding people and their needs", tags: ["product", "ux"] },
    ],
  },
  {
    id: 2,
    question: "Which sounds most like you?",
    options: [
      { text: "I love diving deep into code and algorithms", tags: ["engineering", "backend"] },
      { text: "I enjoy connecting business goals to solutions", tags: ["product", "management"] },
      { text: "I thrive when making things look and feel great", tags: ["design", "frontend"] },
      { text: "I'm happiest when analyzing data for insights", tags: ["data", "analytics"] },
    ],
  },
  {
    id: 3,
    question: "Your ideal work environment?",
    options: [
      { text: "Startup—fast-paced, wear many hats", tags: ["startup", "generalist"] },
      { text: "Big tech—structured, deep specialization", tags: ["bigtech", "specialist"] },
      { text: "Agency—variety of clients and projects", tags: ["agency", "creative"] },
      { text: "Remote-first—flexibility and autonomy", tags: ["remote", "independent"] },
    ],
  },
  {
    id: 4,
    question: "What's your superpower?",
    options: [
      { text: "Breaking down complex systems", tags: ["engineering", "architecture"] },
      { text: "Communicating ideas clearly", tags: ["product", "management"] },
      { text: "Spotting patterns in data", tags: ["data", "analytics"] },
      { text: "Empathizing with users", tags: ["ux", "design"] },
    ],
  },
];

export const careerPaths = [
  {
    id: "swe",
    title: "Software Engineer",
    description: "Build and maintain software systems, write clean code, and solve technical challenges.",
    matchTags: ["engineering", "backend", "frontend", "architecture"],
    icon: "💻",
    avgSalary: "$95k - $150k",
    demandLevel: "Very High",
  },
  {
    id: "pm",
    title: "Product Manager",
    description: "Define product vision, prioritize features, and bridge business and engineering teams.",
    matchTags: ["product", "management", "strategy"],
    icon: "📊",
    avgSalary: "$100k - $160k",
    demandLevel: "High",
  },
  {
    id: "data",
    title: "Data Scientist",
    description: "Extract insights from data, build models, and drive data-informed decisions.",
    matchTags: ["data", "analytics", "engineering"],
    icon: "📈",
    avgSalary: "$90k - $140k",
    demandLevel: "High",
  },
  {
    id: "ux",
    title: "UX Designer",
    description: "Research user needs, design interfaces, and create delightful user experiences.",
    matchTags: ["design", "ux", "creative"],
    icon: "🎨",
    avgSalary: "$75k - $120k",
    demandLevel: "Medium",
  },
  {
    id: "frontend",
    title: "Frontend Engineer",
    description: "Build beautiful, responsive web interfaces with modern frameworks.",
    matchTags: ["frontend", "design", "engineering"],
    icon: "🖥️",
    avgSalary: "$85k - $140k",
    demandLevel: "High",
  },
];

// Peer Context / Imposter Syndrome Data
export const peerStats = {
  applicationsPercentile: 78,
  resumeScorePercentile: 85,
  skillsPercentile: 72,
  avgOfferMonth: "March-April",
  currentMonth: "February",
  message: "You're ahead of schedule! Most CS students land offers in March-April.",
};

// Hidden Curriculum Lessons
export const hiddenCurriculumLessons = [
  {
    id: "negotiate",
    title: "How to Negotiate Salary",
    description: "Learn the exact scripts and strategies to negotiate your first offer.",
    icon: "💰",
    xpReward: 100,
    duration: "15 min",
    unlocked: true,
    completed: false,
    topics: ["Research market rates", "The power of silence", "Counter-offer templates", "Benefits negotiation"],
  },
  {
    id: "follow-up",
    title: "Follow-Up Mastery",
    description: "When, how, and what to say in follow-up emails that actually get responses.",
    icon: "📧",
    xpReward: 75,
    duration: "10 min",
    unlocked: true,
    completed: true,
    topics: ["Timing your follow-ups", "Subject line formulas", "The 3-touch rule", "When to move on"],
  },
  {
    id: "jd-decode",
    title: "Decoding Job Descriptions",
    description: "Read between the lines of job postings to understand what employers really want.",
    icon: "🔍",
    xpReward: 75,
    duration: "12 min",
    unlocked: true,
    completed: false,
    topics: ["Required vs preferred", "Red flags to watch", "Keywords that matter", "Role level signals"],
  },
  {
    id: "professionalism",
    title: "Unwritten Rules of Professionalism",
    description: "The unspoken expectations that can make or break your early career.",
    icon: "👔",
    xpReward: 100,
    duration: "20 min",
    unlocked: false,
    completed: false,
    topics: ["Email etiquette", "Meeting behavior", "Slack/Teams norms", "Managing up"],
  },
  {
    id: "timeline",
    title: "Hiring Timeline Secrets",
    description: "Understand when companies hire and how to time your applications perfectly.",
    icon: "📅",
    xpReward: 50,
    duration: "8 min",
    unlocked: false,
    completed: false,
    topics: ["Big tech cycles", "Startup hiring", "Seasonal patterns", "Urgency signals"],
  },
];

// Barrier Support Resources
export const barrierCategories = [
  { id: "visa", label: "Visa Sponsorship", icon: "🛂" },
  { id: "paid", label: "Paid Opportunities Only", icon: "💵" },
  { id: "nontraditional", label: "Non-Traditional Student", icon: "🎓" },
  { id: "remote", label: "Remote/Flexible", icon: "🏠" },
  { id: "financial", label: "Financial Support", icon: "💳" },
];

export const supportResources = [
  {
    id: 1,
    title: "Companies That Sponsor Visas",
    description: "Curated list of tech companies known to sponsor H1B and OPT.",
    url: "https://github.com/shubhamsardar/visasponsor",
    categories: ["visa"],
    icon: "🌐",
  },
  {
    id: 2,
    title: "FSU Emergency Financial Assistance",
    description: "Get support for unexpected financial hardships affecting your career search.",
    url: "https://dsst.fsu.edu/sos/emergency-funding",
    categories: ["financial"],
    icon: "🆘",
  },
  {
    id: 3,
    title: "Paid Internship Database",
    description: "Filter NoleNetwork to show only paid positions.",
    url: "https://career.fsu.edu/nolenetwork",
    categories: ["paid"],
    icon: "💰",
  },
  {
    id: 4,
    title: "Non-Traditional Student Career Services",
    description: "Dedicated support for students returning to school or changing careers.",
    url: "https://career.fsu.edu/students/undergraduate-students/programs-services/career-advising",
    categories: ["nontraditional"],
    icon: "🔄",
  },
  {
    id: 5,
    title: "Remote Internship Opportunities",
    description: "Companies offering fully remote internship programs.",
    url: "https://www.levels.fyi/internships/?remote=Remote",
    categories: ["remote"],
    icon: "💻",
  },
  {
    id: 6,
    title: "FSU Career Closet",
    description: "Free professional attire for interviews and career fairs.",
    url: "https://career.fsu.edu/students/undergraduate-students/programs-services/career-center-closet",
    categories: ["financial"],
    icon: "👔",
  },
  {
    id: 7,
    title: "International Student Employment Guide",
    description: "CPT, OPT, and work authorization guidance for F1 students.",
    url: "https://cge.fsu.edu/students/f1/employment",
    categories: ["visa"],
    icon: "📋",
  },
];

// Application Insights (AI Feedback for stale apps)
export const applicationInsights = {
  staleThresholdDays: 14,
  insights: [
    {
      status: "Applied",
      daysThreshold: 14,
      reason: "Your application may not have passed initial ATS screening.",
      suggestions: [
        "Review your resume keywords against the job description",
        "Consider adding a referral connection",
        "Follow up with a brief, professional email",
      ],
    },
    {
      status: "Under Review",
      daysThreshold: 21,
      reason: "The hiring process may be slower than expected, or they're comparing candidates.",
      suggestions: [
        "Send a polite check-in email expressing continued interest",
        "Connect with current employees on LinkedIn",
        "Continue applying to other roles",
      ],
    },
  ],
};
