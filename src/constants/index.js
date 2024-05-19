import project1 from "../assets/shopyfy.jpg";
import project2 from "../assets/quetes.jpg";
import project3 from "../assets/astros.jpg";
import project4 from "../assets/weather.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `
I graduated with a Master's degree from Chandigarh University in 2022, following my undergraduate studies at Barkatullah University, which I completed in 2019. I am deeply passionate about coding and problem-solving, constantly seeking to expand my knowledge and 
skills in these areas. I enjoy engaging in discussions about new technologies, staying updated with the latest advancements. In my free time,
 I indulge in my love for football, my favorite game, and immerse myself in music, which brings me immense joy and relaxation.`;

export const EXPERIENCES = [
  {
    year: "04/2023 - Present",
    role: "Full Stack Developer",
    company: "Plutonics",
    description: `Created responsive UI designs, ensuring seamless user experiences across devices and screen sizes.Implemented
    flexible layouts and components to accommodate dynamic content and user interactionsContributed to troubleshooting
    and debugging efforts, resolving issues promptly to minimize downtime.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB","Postgres","Redis","Node.js","Redux","Antd","Tailwind"],
  },
  
  {
    year: "12/2022 - 03/2023",
    role: "Full Stack Developer Intern",
    company: "Plutonics",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "JavaScript", "Node.js", "Postgres","Next.js", "mongoDB","Postgres","Redis","Redux","Antd"],
  },
  {
    year: "07/2022 - 12/2022",
    role: "Programmer Analyst Trainee (PAT)",
    company: "Cognizant",
    description: `Participated in comprehensive training programs covering various programming languages, software development methodologies, and tools.
    Gained proficiency in languages such as Javascript, C#, Python, or SQL, and familiarized with development environments and version control systems.`,
    technologies: ["Javascript", "C#", "Python", "SQL"],
  },
];

export const PROJECTS = [
  {
    title: "Shopy-fy",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Redux","Public APIs"],
  },
  {
    title: "MyQuotes App",
    image: project2,
    description:
      "A single page application containing the Quotes page Used a real time API in the back-end for quotes updating. Created a share button for sharing the Quotes on twitter.",
    technologies: ["HTML", "CSS", "React.js","Javascipt","Public API"],
  },
  {
    title: "Astros",
    image: project3,
    description:
      "Astros is a user-friendly website designed for managing users or customers. It's built with the MERN stack and includes full CRUD (Create, Read, Update, Delete) functionality, making it easy to handle all your user management needs efficiently",
    technologies: ["React.js","Node.js","Express.js","MongoDB"],
  },
  {
    title: "Weather Forecasting App",
    image: project4,
    description:
      "A platform where you can check current weather reports of you location",
    technologies: ["HTML", "CSS", "Javascript","Public API"],
  },
];

export const CONTACT = {
  address: "India",
  phoneNo: "+91 9109775735",
  email: "abhishek.samari1211@gmail.com",
};
