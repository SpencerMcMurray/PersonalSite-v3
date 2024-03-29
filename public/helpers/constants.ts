import { Link, Experience } from "./interfaces";

export const resumeLink: string = "resume.pdf";

export const links: Array<Link> = [
  {
    href: "#about",
    title: "about",
  },
  {
    href: "#experience",
    title: "experience",
  },
  {
    href: "#projects",
    title: "projects",
  },
  {
    href: "#contact",
    title: "contact",
  },
  {
    href: "https://drive.google.com/drive/folders/18y70Hh-x40mhljHvba8CSGMG-28licbs",
    title: "resume",
    newTab: true
  },
];

export const experiences: Array<Experience> = [
  {
    start: "June. 2022",
    end: "Current",
    title: "Software Developer",
    company: {
      name: "Ceridian - Dayforce",
      link: "https://www.ceridian.com/ca/products/dayforce",
    },
    keyLearnings: ["React.js", "C#", "TypeScript", "Azure", "Agile", "Jest", "Unit Testing"],
  },
  {
    start: "Sept. 2020",
    end: "Mar. 2021",
    title: "Software Developer",
    company: {
      name: "TD via UofT",
      link: "https://www.td.com",
    },
    keyLearnings: ["Product Development", "TypeScript", "Team Building"],
  },
  {
    start: "Sept. 2020",
    end: "Dec. 2020",
    title: "Software Developer Intern",
    company: {
      name: "Ceridian - Dayforce",
      link: "https://www.ceridian.com/ca/products/dayforce",
    },
    keyLearnings: ["C#", "JavaScript", "Agile", "Unit Testing"],
  },
  {
    start: "Sept. 2019",
    end: "Dec. 2019",
    title: "Software Developer Intern",
    company: {
      name: "Ceridian - Dayforce",
      link: "https://www.ceridian.com/ca/products/dayforce",
    },
    keyLearnings: ["C#", "JavaScript", "Agile", "Unit Testing"],
  },
];

export const contacts: Array<Link> = [
  {
    href: "https://github.com/SpencerMcMurray",
    title: "fab fa-github",
  },
  {
    href: "https://www.linkedin.com/in/spencer-mcmurray/",
    title: "fab fa-linkedin",
  },
  {
    href: "mailto:spencermcmurray@hotmail.com",
    title: "fas fa-envelope",
  },
  {
    href: "https://github.com/Specnr",
    title: "fab fa-github",
  }
];
