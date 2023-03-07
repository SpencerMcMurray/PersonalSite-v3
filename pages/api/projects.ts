import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

import { Project } from "../../public/helpers/interfaces";

const endpoints = {
  repos: (ghName: string) => `https://api.github.com/users/${ghName}/repos`,
  langs: (ghName: string) => (name: string) =>
    `https://api.github.com/repos/${ghName}/${name}/languages`,
  contribs: (ghName: string) => (name: string) =>
    `https://api.github.com/repos/${ghName}/${name}/contributors`,
};

const get = async (endpoint: string) => {
  return axios
    .get(endpoint, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.GH_AUTH}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
      return [];
    });
};

const getRepoDataWithName = async (ghName: string, allLangs: Set<string>) => {
  const projects: Array<Project> = [];
  if (ghName == "") return projects;
  
  const repos = await get(endpoints.repos(ghName));
  for (let i = 0; i < repos.length; i++) {
    projects.push(
      await get(endpoints.langs(ghName)(repos[i].name)).then(async (langData) => {
        return await get(endpoints.contribs(ghName)(repos[i].name)).then(
          (contribData) => {
            const langs = Object.keys(langData);
            langs.forEach((lang: string) => allLangs.add(lang));
            return {
              id: repos[i].id,
              name: repos[i].name,
              desc: repos[i].description || "",
              stars: repos[i].stargazers_count,
              forks: repos[i].forks_count,
              link: repos[i].html_url,
              contribs: contribData
                .filter((user: any) => user.login === ghName)
                .pop().contributions,
              langs,
            };
          }
        );
      })
    );
  }
  return projects;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const allLangs = new Set<string>();

  const main_projects = await getRepoDataWithName(process.env.GH_MAIN_NAME || "", allLangs);
  const alt_projects = await getRepoDataWithName(process.env.GH_ALT_NAME || "", allLangs);

  const projects: Array<Project> = [...main_projects, ...alt_projects];
  
  projects.sort((a, b) => b.stars + b.forks - (a.stars + a.forks));
  res.status(200).json({ projects, langs: Array.from(allLangs) });
};
