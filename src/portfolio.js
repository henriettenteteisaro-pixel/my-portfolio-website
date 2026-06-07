



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
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true 
};



const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "henriettenteteisaro@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
 a
  display: true 
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



const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Gisma university of applied sciences",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "bachelor of Science in Computer Science",
      duration: "june 2025- december 2028",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "American school of Antananarivo",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of high",
      duration: "September 2021 - July 2024",
      desc: "Ranked top 10% in the program.",
      
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
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false 
};


const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Junior Front-End developer",
      company: "Freelance/ Tec project ",
      companylogo: require("./assets/images/developerLogo.png"),
      date: "oct 2025 – Present",
      desc: " balancing academic studies at Gisma University of Applied science while building responsive web application and managing versin control pipelines.",
      descBullets: [
        "Developing and maintaaining modular user interfaces using react.js, HTML5, and modern css frameworks",
        "configuraing local development envirnments, debugging runtime errors, and optimizing code structure for scalability"
      ]
    },
    {
      role: "web development intern",
      company: "Quklab innovation hub",
      companylogo: require("./assets/images/klabLogo.png"),
      date: "May 2017 – May 2018",
      desc: "translated figma design wireframes into clean, semantic HTML5 and CSS3 code blocks.",
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
      image: require("./assets/images/everychildLogo.webp"),
      projectName: "Every Child Deserves a Home",
      projectDesc: "built a fully responsive portfolio interface featuring modern UI layouts and component-driven architecture using react components",
      footerLink: [
        
       
      ]
    },
   
  ],
  display: true 
};




  ],
  display: true 
};







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
  openSource,
  bigProjects,
  
  
  talkSection,
  
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
