import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  plasma,
  coachpx,
  innovination,
  carrent,
  jobit,
  tripguide,
  threejs,
  pb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "CoachPx",
    icon: coachpx,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Utilized React along with React Flow and React Context to create a dynamic and interactive user interface that enhances user engagement and experience.",
      "Designed and implemented a robust RESTful API architecture, facilitating seamless data communication between the front-end and back-end systems.",
      "Utilized various AWS services such as Amazon DynamoDB for flexible data storage, Amazon Cognito for secure user authentication, and AWS Lambda for serverless data fetching, optimizing data retrieval and ensuring efficient data flow.",
      "Led UI/UX design, ensuring cross-device performance. Spearheaded growth through collaborative development and continuous learning.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Innovination",
    icon: innovination,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Developed web pages and managed backend operations, including product categorization and inventory management for various WooCommerce websites, ensuring seamless user experience and visually appealing designs.",
      "I demonstrated proficiency in web development, project management, and product categorization. My proactive approach and collaboration with the team contributed to successful project outcomes.",
    ],
  },
  {
    title: "Co-founder",
    company_name: "Plasma Studios",
    icon: plasma,
    iconBg: "#383E56",
    date: "June 2021",
    points: [
      "I co-founded Plasma Studios during my college days, providing extensive IT consultancy, websites, and applications for businesses aiming to establish a robust online footprint.",
      "Remarkably, we directed a portion of our earnings toward meaningful initiatives, conducting impactful food distribution campaigns that benefited underserved communities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I secured 6th place among 70 IITs and NITs by developing a Raspberry Pi-powered VR-controlled spy car, utilizing an Arduino UNO microcontroller and a Bluetooth module.",
    name: "HackFest'ISM 2019",
    designation: "IIT ISM Dhanbad",
    image: "https://pbs.twimg.com/profile_images/959448118889607168/pWsQ36wm_400x400.jpg",
  },
  {
    testimonial:
      "PointBlank is a group of over 80 programmers who work to promote coding culture in colleges by participating in 10+ contests and organising technical seminars.",
    name: "Point Blank",
    designation: "Member",
    image: pb,
  },
  {
    testimonial:
      "In competitive programming, I have attained a CodeChef rating of 1628, holding a 3-star coder status. Furthermore, I have achieved a Codeforces rating of 1198.",
    name: "codechef",
    designation:"rahul_rudra",
    image: "https://i.pinimg.com/originals/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg",
    
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
