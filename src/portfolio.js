



import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 



const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};



const illustration = {
  animated: true 
};

const greeting = {
  username: "Henriette Ntete Isaro",
  title: "Hi all, I'm Isaro",
  subTitle: emoji(
    "First-year Computer Science student with a keen interest in software development, programming, and emerging technologies. Eager to apply academic knowledge to practical projects while developing strong technical and problem-solving skills."

  ),
  resumeLink:
    "https://www.overleaf.com/project/6a37fd714cb88569de68e4a8", 
  displayGreeting: true 
};



const socialMediaLinks = {
  display: true,
  github: "https://github.com/henriettenteteisaro-pixel/computer-science-portfolio-",
  linkedin: "https://www.linkedin.com/in/isaro-ntete-8b93372a8/8b9337a8/",
  gmail: "henriettenteteisaro@gmail.com",
  facebook: "https://www.facebook.com/"
  
 
  
};



const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

 
  softwareSkills: [
    {
      skillName: "Html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "visual basic",
      fontAwesomeClassname: "fab visual basic-alt"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-c++"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    
  ],
  display: true 
};



const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Gisma university of applied sciences",
      logo: require("./assets/images/Gisma logo.png"),
      subHeader: "bachelor of Science in Computer Science",
      duration: "june 2025- december 2028",
      desc: "gaining a strong foundation in computer science principles."
    },
    {
      schoolName: "Stella Matutina",
      logo: require("./assets/images/Slogo.png"),
      subHeader: "High school ",
      duration: "September 2021 - July 2024",
      desc: "Ranked top 10% in the program."
      
    }
  ]
};



const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "20%" 
    },
    {
      Stack: "Visualization",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: True
};


const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Junior Front-End developer",
      company: "Freelance/ Tec project ",
      companylogo: require("./assets/images/Flogo.png"),
      date: "oct 2025 – Present",
      desc: " balancing academic studies at Gisma University of Applied science while building responsive web application and managing versin control pipelines.",
      descBullets: [
        "Developing and maintaining modular user interfaces using react.js, HTML5, and modern css frameworks",
        "configuraing local development envirnments, debugging runtime errors, and optimizing code structure for scalability"
      ]
    },
    {
      role: "Kitchen Assistant",
      company: "KFC Rwanda",
      companylogo: require("./assets/images/Klogo.png"),
      date: "May 2024 – sept 2024",
      desc: "Developed team work skills.",
    },
    
  ]
};



const openSource = {
  showGithubProfile: "true",
};



const bigProjects = {
  title: "Every child deserves a home",
  subtitle: "SOCIAL IMPACT AND PLATFORM DEVELOPMENT INITIATIVES",
  projects: [
    {
      image: require("./assets/images/project.png"),
      projectName: "Every Child Deserves a Home",
      projectDesc: "built a fully responsive portfolio interface featuring modern UI layouts and component-driven architecture using react components",
      footerLink: [
        
       
      ]
    },
   
  ],
  display: true 





  
  









};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

 
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 1603826632",
  email_address: "henriettenteteisaro@gmail.com"
};



const twitterDetails = {
  userName: "twitter", 
  display: true 
};
const opensource= {
  githubUserName: "henriettenteteisaro-pixel",
display: false
};
const achievementSection={
  display: false,
  achievementsCards:[]
};

const blogSection = {
  title: "Blogs",
  subtitles: "with love for developing cool stuff, I love to write and teach others what i have learnt",
  display: false,
  blogs: [
    {
      url:"https:// example.com/blog",
      title: "my first blog",
      description: "a despriction of my first blog post entry."
    }
  ]
};
const talkSection = { 
  title: "talks",
  subtitle: "MUTUAL EXCHANGE OF IDEAS, EXPERIENCE AND KNOWLEDGE THROUGH PUBLIC SPEAKING.",
  display: false,
  talks: [
    {
      title: "my first talk",
      subtitle: " presentation",
      slides_url: "https://example.com/slides",
      event_url: "https://example.com/event"
    }
  ]
};
const podcastSection = {
  title: "podcast",
  subtitle: "A platform for sharing insights and stories.",
  display: false,
  podcast: []
}
const isHireable = false; 
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
