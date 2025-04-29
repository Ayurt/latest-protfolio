import project1 from "../assets/projects/sr-dental.png";
import project2 from "../assets/projects/lawseva.png";
import project3 from "../assets/astros.jpg";
import project4 from "../assets/weather.jpg";
import bidding from "../assets/projects/Bidding.png";
import investMyFund from "../assets/projects/InvestMyFund.jpg";
import chargeQ from "../assets/projects/chargeQ.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, PHP, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT_2 = `With a strong foundation in both design and logic, I strive to build seamless digital experiences. I'm enthusiastic about continuous learning and staying updated with the latest industry trends to ensure my solutions are both modern and effective.`;

export const ABOUT_TEXT = `
I graduated with a Bachelor's degree from Graphic Era University 
(Dehradun) in 2024, after my diploma studies at Government Polytechnic 
Srinagar (Uttarakhand), which I completed in 2020. I am deeply passionate 
about coding and problem-solving, constantly seeking to expand my 
knowledge and skills in these areas. I enjoy engaging in discussions about 
new technologies.`;

export const ABOUT_TEXT_2 = `In my free time, I manage a YouTube channel where I share insights on 
computer science fundamentals, aiming to make complex topics accessible to 
a broader audience. Additionally, I have a strong passion for trekking and 
exploring, which allows me to connect with nature and experience new adventures.`

export const ABOUT_TEXT_3 = `Professionally, I thrive in collaborative environments where I can contribute 
to impactful projects. I'm always eager to learn from others, take on challenges, 
and deliver solutions that make a real difference.`;


export const EXPERIENCES = [
  {
    year: "6/2024 - Present",
    role: "Full Stack Developer",
    company: "Plutonics",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "JavaScript", "Node.js", "Postgres","Next.js", "mongoDB","Postgres","Redis","Redux","Antd"],
  },
  {
    year: "11/2023 - 3/2024",
    role: "Credit Card Fraud Detection",
    company: "Research Work",
    description: `Developed and implemented a comprehensive Credit Card Fraud Detection system using AdaBoost, Logistic Regression, K-Nearest Neighbors (KNN), and Random Forest algorithms. Conducted an extensive comparative analysis with key metrics (F1 Score, Accuracy, Recall, Precision) and visual aids (heatmaps, spectrograms) to enhance system performance.`,
    technologies: ["Python", "Jupyter","AdaBoost","Logistic Regression","Random Forest","KNN",],
    link: "https://ieeexplore.ieee.org/document/10489771",
  },
];

export const PROJECTS = [
  {
    title: "Invest My Funds (Real Time Live Project)",
    image: investMyFund,
    webLink: "https://investmyfunds.in/",
    description:
        "Played a key role in the development of 'Invest My Funds,' a real-time investment project, actively contributing to its design and functionality. Utilized Next.js for development and collaborated with the team to implement Ant Design for a seamless user experience, ensuring the project's success.",
    technologies: ["Next.js", "Ant Design", "Django"],
  },
  {
    title: "CA Cloud Desk",
    webLink: "https://www.caclouddesk.com/",
    image: project2,
    description:
        "CA Cloud Desk is a comprehensive practice management platform available as both a web application and a mobile app. Designed specifically for Chartered Accountants and tax professionals, it offers modules for task management, document handling, client collaboration, billing, and more. With features like Tally and GST API integration, secure client portals, and automated document generation, CA Cloud Desk streamlines workflows, enhances efficiency, and ensures data security.",
    technologies: ["Flutter", "React", "Django"],
  },
  {
    title: "ChargeQ (Real Time Live Project)",
    image: chargeQ,
    description:
        "Designed and implemented a comprehensive wallet system allowing users to recharge their wallets and perform transactions using CASHFREE integration, enhancing user convenience and financial management. Integrated mobile number and OTP-based authentication for secure user login across the entire portal, ensuring robust access control and enhancing overall security. Built and maintained the backend using Node.js to create and manage APIs, while also designing and developing a responsive frontend with Angular for seamless user interaction and experience.",
    technologies: ["Node.js", "Angular","Express", "CASHFREE"],
  },
  {
    title: "SR Dental",
    webLink: "https://srdentalcare.com/",
    image: project1,
    description:
        "Developed a fully dynamic WordPress website for SR Dental, a leading dental clinic in Pitampura, Delhi. The site offers a responsive and user-friendly interface, showcasing comprehensive dental services including implants, braces, cosmetic dentistry, and pediatric care. Key features include an intuitive appointment booking system, detailed doctor profiles, and an informative blog section, all tailored to enhance patient engagement and streamline clinic operations.",
    technologies: ["WordPress"],
  },
  {
    title: "Online Auction Management System",
    link: "https://github.com/Ayurt/Auction-Management-System",
    image: bidding,
    description:
        "Designed and developed a robust online auction system using PHP for back-end processing and HTML, CSS, and JavaScript for the front end. Used XAMPP, which is a popular web server solution that bundles several components, including Apache (a web server) and MySQL (a database management system).",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "XAMPP"],
  },
];

export const CONTACT = {
  address: "India",
  phoneNo: "+91 8439885361",
  email: "ayushrawat760@gmail.com",
};
