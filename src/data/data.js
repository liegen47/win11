import {
  JavascriptOriginal,
  PythonOriginal,
  Html5Original,
  Css3Original,
  ExpressOriginal,
  ReactOriginal,
  NextjsOriginal,
  TailwindcssOriginal,
  BootstrapPlain,
  NodejsOriginal,
  MongodbPlain,
  PostmanPlain,
  CPlain,
  DjangoPlain,
  MysqlOriginalWordmark,
  PostgresqlOriginal,
  PhotoshopOriginal,
  FigmaOriginal,
  BlenderOriginal,
} from "devicons-react";

// Constants
const githubLink = "https://github.com/liegen47";

// Profile Description
export const profileDescription = [
  "A driven full-stack developer with a strong foundation in web development, database management, and user authentication. Proficient in building static and dynamic websites, implementing RESTful APIs, and optimizing for search engines. Passionate about learning new technologies and creating reliable and user-friendly platforms.",
];

// Work Experience Template
export const workExperienceTemplate = [
  {
    key: 1,
    company: "BizBezzie Private Limited",
    description: [
      "Created and optimized static and dynamic websites for 10+ clients which boosted site performance and client engagement metrics by 35%.",
      "Utilized React.js and Next.js for creating responsive and interactive interfaces for 10+ websites.",
      "Employed PHP, Node.js and Express.js for backend development, implementing RESTful APIs and handling server-side logic for 10+ web applications.",
      "Handlded API calls and created API endpoints for seamless communication between frontend and backend.",
      "Designed and implemented efficient database solutions using MySQL for data storage and retrieval.",
      "Conducted SEO optimization for websites to improve search engine rankings, enhance site visibility, and drive organic traffic.",
    ],
    duration: "Nov 2020 - May 2024",
    designation: "Full Stack Developer Intern",
    type: "work",
  },
  {
    key: 2,
    company: "The Sparks Foundation",
    description: [
      "Created a BANKING SYSTEM CLONE, demonstrating proficiency in full-stack development, user authentication, and database management.",
      "Created interactive web applications serving as a reliable platform for financial transactions and accounts.",
      "Designed a responsive website using technologies like HTML, CSS, PHP, JavaScript, and MySQL.",
    ],
    duration: "Nov 2022-Jan 2023",
    designation: "Full Stack Developer Intern",
    type: "work",
  },
];

// GitHub Repositories
export const githubRepos = [
  {
    name: "Portfolio",
    techUsed: ["Next.js", "TailwindCSS"],
    description: "Uncover deeper insights into my journey and capabilities.",
    githubLink: `${githubLink}/Portfolio`,
    liveURL: "https://portfolio-vert-one-79.vercel.app/",
  },
  {
    name: "Emoji-TicTacToe",
    techUsed: ["React", "TailwindCSS"],
    description:
      "Emoji TicTacToe adds a fun twist to the classic game with colorful emojis, offering single and local multiplayer modes, responsive design, and captivating animations.",
    githubLink: `${githubLink}/Emoji-TicTacToe`,
    liveURL: "https://emoji-tic-tac-toe.vercel.app/",
  },
  {
    name: "GTA-VI(Early Access)",
    techUsed: ["Python"],
    description:
      "Explore chaos in GTA VI(Early Access), a Python and Ursina-powered open-world adventure. Engage in a gripping narrative, experience dynamic gameplay, and unlock exclusive updates. Navigate the urban jungle and gear up for the thrill!",
    githubLink: `${githubLink}/GTA-VI-Early-Access-`,
    liveURL: `${githubLink}/GTA-VI-Early-Access-`,
  },
  {
    name: "NYX",
    techUsed: ["HTML", "CSS", "JavaScript"],
    description:
      "NYX is a sleek Website Blocker that empowers users to block distracting websites for set durations, promoting productivity and focus.",
    githubLink: `${githubLink}/nyx`,
    liveURL: `${githubLink}/nyx`,
  },
];

// Education Experience
export const educationExperience = [
  {
    key: 1,
    institution: "Hindustan Institute of Science & Technology",
    graduation: "May 2024",
    degree: "Bachelor in Computer Science and Engineering",
    type: "education",
  },
];

const iconSize = 15;
const iconClass = "mx-auto";

export const skills = [
  {
    key: 1,
    name: "Python",
    type: "language",
    icon: <PythonOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 2,
    name: "JavaScript",
    type: "language",
    icon: <JavascriptOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 3,
    name: "HTML",
    type: "language",
    icon: <Html5Original className={iconClass} size={iconSize} />,
  },
  {
    key: 4,
    name: "CSS",
    type: "language",
    icon: <Css3Original className={iconClass} size={iconSize} />,
  },
  {
    key: 5,
    name: "React",
    type: "framework",
    icon: <ReactOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 6,
    name: "Next.js",
    type: "framework",
    icon: <NextjsOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 7,
    name: "TailwindCSS",
    type: "framework",
    icon: <TailwindcssOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 8,
    name: "Bootstrap",
    type: "framework",
    icon: <BootstrapPlain className={iconClass} size={iconSize} />,
  },
  {
    key: 9,
    name: "Node.JS",
    type: "framework",
    icon: <NodejsOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 10,
    name: "MongoDB",
    type: "database",
    icon: <MongodbPlain className={iconClass} size={iconSize} />,
  },
  {
    key: 11,
    name: "Postman",
    type: "tool",
    icon: <PostmanPlain className={iconClass} size={iconSize} />,
  },
  {
    key: 12,
    name: "C",
    type: "language",
    icon: <CPlain className={iconClass} size={iconSize} />,
  },
  {
    key: 13,
    name: "Express",
    type: "framework",
    icon: <ExpressOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 14,
    name: "Django",
    type: "framework",
    icon: <DjangoPlain className={iconClass} size={iconSize} />,
  },
  {
    key: 15,
    name: "MySQL",
    type: "database",
    icon: <MysqlOriginalWordmark className={iconClass} size={iconSize} />,
  },
  {
    key: 16,
    name: "PostgreSQL",
    type: "database",
    icon: <PostgresqlOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 17,
    name: "Blender",
    type: "tool",
    icon: <BlenderOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 18,
    name: "Photoshop",
    type: "tool",
    icon: <PhotoshopOriginal className={iconClass} size={iconSize} />,
  },
  {
    key: 19,
    name: "Figma",
    type: "tool",
    icon: <FigmaOriginal className={iconClass} size={iconSize} />,
  },
];

const appsData = [
  {
    id: 1,
    name: "Google Chrome",
    icon: "/images/apps/chrome.png",
    action: "browser",
    size: "w-18 h-18",
  },
  {
    id: 2,
    name: "About Me",
    icon: "/images/apps/folder.png",
    action: "explorer",
    size: "w-18 h-18",
  },
  {
    id: 3,
    name: "Recycle Bin",
    icon: "/images/apps/recyclebin.png",
    action: "recycle",
    size: "w-14 h-14",
  },
  {
    id: 4,
    name: "Microsoft Edge",
    icon: "/images/apps/edge.png",
    action: "browser",
    size: "w-11 h-11",
  },
  {
    id: 5,
    name: "Calculator",
    icon: "/images/apps/calculator.png",
    action: "calculator",
    size: "w-11 h-11",
  },
  {
    id: 6,
    name: "VS Code",
    icon: "https://laaouatni.github.io/w11CSS/images/vs-code.ico",
    action: "vscode",
    size: "w-8 h-8",
  },
  {
    id: 7,
    name: "Emoji TicTacToe",
    icon: "https://raw.githubusercontent.com/MishanPoudel/Emoji-TicTacToe/main/public/favicon.ico",
    action: "app",
    subAction: "emoji",
    size: "w-10 h-10",
  },
  {
    id: 8,
    name: "Spotify",
    icon: "https://www.freepnglogos.com/uploads/spotify-logo-png/image-gallery-spotify-logo-21.png",
    action: "app",
    subAction: "spotify",
    size: "w-10 h-10",
  },
];

export default appsData;

export const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/vanshkapoor418/",
  github: githubLink,
};
