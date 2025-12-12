// Costanti e configurazioni centralizzate
export const SECTIONS = ["hero", "about", "progetti", "contatti"];

export const MENU_ITEMS = [
  { id: "hero", label: "Home", icon: "🏠" },
  { id: "about", label: "Chi Sono", icon: "👨‍💼" },
  { id: "progetti", label: "Progetti", icon: "💼" },
  { id: "contatti", label: "Contatti", icon: "📞" },
];

export const SKILLS = [
  { name: "React", level: 80, color: "from-blue-500 to-blue-600" },
  { name: "Next.js", level: 70, color: "from-gray-700 to-gray-800" },
  { name: "JavaScript", level: 100, color: "from-yellow-500 to-yellow-600" },
  { name: "Tailwind CSS", level: 80, color: "from-cyan-500 to-cyan-600" },
  { name: "TypeScript", level: 75, color: "from-blue-600 to-blue-700" },
  { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
];

export const PROJECTS = [
  {
    title: "TizzzVerse",
    description: "Progetto HTML/CSS VANILLA. Sito vetrina a tema videogiochi!",
    tech: ["HTML", "CSS"],
    color: "from-blue-500 to-cyan-500",
    icon: "🎮",
    image: "/images/Screenshot 2025-12-12 163550.png",
    liveUrl: "https://tizzzio.github.io/TizzzVerse/",
    codeUrl: "https://github.com/Tizzzio/TizzzVerse",
  },

  {
    title: "Dog Explorer",
    description: "Progetto HTML/CSS/JS VANILLA per esplorare razze di cani con API esterne.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-purple-500 to-pink-500",
    icon: "📸",
    image: "/images/Screenshot 2025-12-12 163605.png",
    liveUrl: "https://tizzzio.github.io/Dog-Explorer/",
    codeUrl: "https://github.com/Tizzzio/Dog-Explorer",
  },
  {
    title: "Portfolio Website",
    description: "Portfolio personale con design moderno, animazioni fluide e ottimizzazioni per le performance.",
    tech: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
    color: "from-green-500 to-teal-500",
    icon: "🎨",
    image: "/images/Screenshot 2025-12-12 164117.png",
    liveUrl: "https://portfolio-dun-two-60.vercel.app",
    codeUrl: "https://github.com/Tizzzio/Portfolio",
  },
];

export const TAGS = ["📱 Responsive Design", "⚡ Performance Optimization", "🔧 API Integration", "🚀 Modern Frameworks"];

export const PERSONAL_INFO = {
  name: "Andrea Zito",
  role: "Frontend Developer",
  location: "Italia",
  email: "andryzito01@gmail.com",
  github: "https://github.com/Tizzzio",
  linkedin: "https://www.linkedin.com/in/andrea-zito-34785928a/",
  projectsCompleted: 4,
};

// Classi CSS comuni
export const CSS_CLASSES = {
  gradient: {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600",
    primaryText: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
    divider: "w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full",
  },
  button: {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold",
    secondary:
      "border-2 border-blue-600 text-blue-600 bg-white bg-opacity-90 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold hover:scale-105 shadow-xl hover:shadow-2xl",
  },
  card: {
    base: "bg-white rounded-2xl shadow-xl p-8 border border-gray-100",
    hover:
      "group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2",
  },
  input: {
    base: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300",
  },
};
