import { ProjectsI, SocialIconsI } from "../types/interfaces";

// array for simultaneously mapping over translated navbar links
export const navLinks = ["hero", "tech", "projects", "contact", "impressum"];

// tech icons for differing parts of the web app
export const techIcons = [
  { name: "HTML5", svg: "html5.svg" },
  { name: "CSS3", svg: "css3.svg" },
  { name: "JavaScript", svg: "javascript.svg" },
  { name: "TypeScript", svg: "typescript.svg" },
  { name: "React", svg: "react.svg" },
  { name: "Node.js", svg: "nodejs.svg" },
  { name: "Express.js", svg: "express.svg" },
  { name: "Next.js", svg: "nextjs.svg" },
  { name: "Angular", svg: "angular.svg" },
  { name: "Tailwind", svg: "tailwindcss.svg" },
  { name: "SCSS", svg: "SASS.svg" },
  { name: "Material-UI", svg: "material-ui.svg" },
  { name: "MongoDB", svg: "mongodb.svg" },
  { name: "Firebase", svg: "firebase.svg" },
  { name: "MySQL", svg: "mysql.svg" },
  { name: "Sequelize", svg: "sequelizejs.svg" },
  { name: "Framer Motion", svg: "motion.svg" },
  { name: "d3", svg: "d3.svg" },
  { name: "i18next", svg: "i18next.svg" },
];

// social icons for navbar and footer
export const socialIconsList: SocialIconsI[] = [
  {
    name: "LinkedIn",
    viewBox: "0 0 448 512",
    svg: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    link: "https://linkedin.com/in/david-goergens-9809a6217",
  },
  {
    name: "Github",
    viewBox: "0 0 496 512",
    svg: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
    link: "https://github.com/DaGo85",
  },
  {
    name: "Email",
    viewBox: "0 0 512 512",
    svg: "M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z",
    link: "mailto:davegoergens@gmail.com",
  },
];

// content for projects
export const projectContent: ProjectsI[] = [
  {
    title: "Photo Artist App",
    preview: [
      "photo-blog.jpeg",
      "photo-contact.JPG",
      "photo-gallery.jpeg",
      "photo-mobile-story.jpeg",
      "photo-modal.jpeg",
      "photo-stories.jpeg",
    ],
    livelink: "https://www.photo.davidgo.ch",
    github: "https://github.com/DaGo85/mern-photo-artist-app",
    techstack: [
      { name: "JavaScript", svg: "javascript.svg" },
      { name: "React", svg: "react.svg" },
      { name: "Tailwind", svg: "tailwindcss.svg" },
      { name: "Firebase", svg: "firebase.svg" },
      { name: "Node.js", svg: "nodejs.svg" },
      { name: "Express.js", svg: "express.svg" },
      { name: "Framer Motion", svg: "motion.svg" },
      { name: "MongoDB", svg: "mongodb.svg" },
    ],
  },
  {
    title: "Foody",
    preview: [
      "foody-front.jpg",
      "foody-mobile-front.jpg",
      "foody-add.jpg",
      "foody-mobile-add.jpg",
      "foody-facts.jpg",
      "foody-single.jpg",
      "foody-recipes.jpg",
      "foody-edit.jpg",
      "foody-mobile-edit.jpg",
      "foody-mobile-recipes.jpg",
      "foody-auth.jpg",
    ],
    livelink: "https://foody.davidgo.ch",
    github: "https://github.com/DaGo85/recipe-app",
    techstack: [
      { name: "JavaScript", svg: "javascript.svg" },
      { name: "React", svg: "react.svg" },
      { name: "Tailwind", svg: "tailwindcss.svg" },
      { name: "Firebase", svg: "firebase.svg" },
      { name: "MySQL", svg: "mysql.svg" },
      { name: "Node.js", svg: "nodejs.svg" },
      { name: "Sequelize", svg: "sequelizejs.svg" },
      { name: "Express.js", svg: "express.svg" },
      { name: "Framer Motion", svg: "motion.svg" },
    ],
  },
  {
    title: "Portfolio",
    preview: [
      "portfolio-hero.JPG",
      "portfolio-contact.JPG",
      "portfolio-mobile-impressum.JPG",
      "portfolio-projects.JPG",
      "portfolio-tech.JPG",
    ],
    livelink: "https://www.davidgo.ch",
    github: "https://github.com/DaGo85/portfolio-v1",
    techstack: [
      { name: "TypeScript", svg: "typescript.svg" },
      { name: "Next.js", svg: "nextjs.svg" },
      { name: "Tailwind", svg: "tailwindcss.svg" },
      { name: "i18next", svg: "i18next.svg" },
      { name: "Framer Motion", svg: "motion.svg" },
    ],
  },
  {
    title: "Weather App",
    preview: [
      "weather-head.jpg",
      "weather-graph.jpg",
      "weather-nextdays.jpg",
      "weather-mobile.jpg",
    ],
    livelink: "https://www.weather.davidgo.ch",
    github: "https://github.com/DaGo85/weather-app",
    techstack: [
      { name: "JavaScript", svg: "javascript.svg" },
      { name: "Next.js", svg: "nextjs.svg" },
      { name: "Tailwind", svg: "tailwindcss.svg" },
      { name: "d3", svg: "d3.svg" },
    ],
  },
  {
    title: "Angular Weather App",
    preview: [
      "weather-head.jpg",
      "weather-graph.jpg",
      "weather-nextdays.jpg",
      "weather-mobile.jpg",
    ],
    livelink: "https://www.angular-weather.davidgo.ch",
    github: "https://github.com/DaGo85/angular-weather-app",
    techstack: [
      { name: "TypeScript", svg: "typescript.svg" },
      { name: "Angular", svg: "angular.svg" },
      { name: "SCSS", svg: "SASS.svg" },
      { name: "d3", svg: "d3.svg" },
    ],
  },
];

// data for the impressum
export const impressumData = {
  address: {
    name: "David Goergens",
    street: "Lutertalstrasse 25",
    city: "3065 Bolligen",
  },
  contact: {
    email: "E-Mail: davegoergens@gmail.com",
  },
};

export const heroData = { name: "David Goergens" };
