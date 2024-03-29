export interface Link {
  href: string;
  title: string;
  newTab?: boolean;
}

export interface Experience {
  start: string;
  end: string;
  title: string;
  company: Company;
  keyLearnings: Array<string>;
}

export interface Company {
  name: string;
  link: string;
}

export interface Project {
  id: number;
  name: string;
  desc: string;
  stars: number;
  forks: number;
  link: string;
  contribs: number;
  langs: Array<string>;
}
