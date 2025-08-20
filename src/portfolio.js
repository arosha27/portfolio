/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arosha Bakhtawar",
  title: "Hi all, I'm Arosha Bakhtawar",
  subTitle: emoji(
   "A passionate Machine Learning Engineer with expertise in Python, Deep Learning, Data Science, and building intelligent systems. Skilled in designing and deploying ML models, working with frameworks like TensorFlow, PyTorch, and scikit-learn, and applying data-driven solutions to real-world problems."

  ),
  resumeLink:
    "https://drive.google.com/file/d/11S3p_6lPirIOmxYKdxRAdUakj7aClg90/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arosha27",
  linkedin: "https://www.linkedin.com/in/arosha-amin",
  gmail: "aroshaamin0@gmail.com",
  
  kaggle: "https://www.kaggle.com/aroshabakhtawar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Machine Learning Engineer | Passionate about AI, Deep Learning, and LLMs",
  skills: [
     emoji(
      "⚡ Data analysis, feature engineering, and visualization for actionable insights"
    ),
    emoji(
      "⚡ Build and deploy Machine Learning and Deep Learning systems with Python"
    ),
    emoji("⚡ Develop and fine-tune Large Language Models (LLMs) and AI-driven applications"),
    emoji(
      "⚡Integration of AI/ML solutions with cloud platforms (AWS / GCP / Azure)"
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Deep Learning",
      fontAwesomeClassname: "as fa-network-wired"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MLOps",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Streamlit",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The Islamia University of Bahawalpur",
      logo: require("./assets/images/IUBlogo.jpeg"),
      subHeader: "Undergrad In Data Science(3.92 / 4.00)",
      duration: "September 2022 - July 2026",
      desc: "Actively involved in both academic and extracurricular activities while pursuing Data Science.",
      descBullets: [
        "Member of student clubs and university societies",
        "Participated in Tech Quest and other curricular competitions",
        "Engaged in extracurricular activities to build leadership and teamwork skills"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming(Python , C++)",
      progressPercentage: "90%"
    },
     {
      Stack: "Deep Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "MLOPs & Deployment",
      progressPercentage: "60%"
    },


  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "ML & AI Intern",
      company: "Codexcrafters",
      companylogo: require("./assets/images/WhatsApp Image 2025-08-19 at 14.59.47_0f003edb.jpg"),
      date: "15 July 2026– Present",
      desc: "Contributing to applied AI and ML projects by performing data analysis, building and fine-tuning ML/DL models, and delivering insights.",
      descBullets: [
        "Performed exploratory data analysis (EDA) and preprocessing tasks",
        "Developed and tested ML/DL models for real-world applications",
        "Worked on optimizing pipelines for better model performance"
      ]
    },
    {
      role: "Data Science Intern",
      company: "ITSolera",
      companylogo: require("./assets/images/image.png"),
      date: "28 July 2026 – Present",
      desc: "Driving complete end-to-end ML/DL project development — from raw data collection to deployment — with a strong focus on analytics and visualization.",
      descBullets: [
        "Data acquisition, cleaning, and feature engineering",
        "Built interactive dashboards and reports using Power BI",
        "Developed, trained, and deployed ML/DL models",
        "Worked on deploying solutions into production environments"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME END TO END PROJECTS I DID DURING MY INTERNSHIP",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Scotland’s Monthly Birth-Rate Forecaster",
      projectDesc: "Team project focused on forecasting monthly birth counts in Scotland using LSTM, GRU, and Transformer models to capture complex temporal patterns and outperform traditional tree-based methods.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://umairabid205-scotland-birth-forecast-app-9q1eqe.streamlit.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Structural Health Monitoring System",
      projectDesc: "Built a hybrid deep learning system for anomaly detection in structural health monitoring by fusing multi-modal sensor data. Applied advanced feature engineering and balanced imbalanced datasets using SMOTE to enhance model robustness and accuracy.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://arosha27-structural-health-monitoring-system-app-2u45ow.streamlit.app/Predictions"
        }
      ]
    } ,

    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Human-In-the-Loop Rockburst Prediction System",
      projectDesc: "Deployed a human-in-the-loop system for rockburst prediction that integrates real-time data ingestion, interactive visualizations, engineer feedback capture, and automated retraining to ensure accurate, transparent, and adaptive decision support for underground engineering safety.",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    },

     {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Movie Recommender System",
      projectDesc: "A Content-Based Movie Recommender System built using Python and deployed with Streamlit. The system recommends 5 similar movies based on your selected movie, using movie metadata (cast, crew, keywords, genres, and overview)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ml-project-movierecommendersystem-6cm6wf6cejr5xxuav2bgfi.streamlit.app/"
        }
      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Reinforcement Learning with Gymnasium in Python",
      subtitle:
        "Completed certification from DataCamp covering RL algorithms and environment design.",
      image: require("./assets/images/datacamp.jpeg"),
      imageAlt: "DataCamp logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Introduction to Deep Learning with PyTorch",
      subtitle:
        "Completed hands-on course from Youtube on deep learning fundamentals using PyTorch.",
      image: require("./assets/images/youtube.jpeg"),
      imageAlt: "Youtube Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },
    {
      title: "LangChain for LLM Application Development",
      subtitle:
        "Learned to build advanced LLM-powered applications using LangChain, by DeepLearning.AI.",
      image: require("./assets/images/deeplearningai.webp"),
      imageAlt: "Youtube Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "5-Day GenAI Intensive Course",
      subtitle:
        "Completed a Kaggle-led bootcamp on Generative AI tools, workflows, and applications.",
      image: require("./assets/images/kaggle.jpeg"),
      imageAlt: "Kaggle Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    {
      title: "ChatGPT Prompt Engineering for Developers",
      subtitle: "Completed certification from DeepLearning.AI on effective prompt design and LLM usage.",
      image: require("./assets/images/deeplearningai.webp"),
      imageAlt: "Deeplearning Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

//Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

//Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to disscuss a project? My Inbox is open for all.",
      email_address: "aroshaamin0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
