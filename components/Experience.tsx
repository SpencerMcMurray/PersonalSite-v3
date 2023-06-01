import { FunctionComponent, useContext } from "react";

import Layout from "./Layout";
import ExperienceDisplay from "./ExperienceDisplay";
import ThemeContext from "../components/ThemeContext";

import { Theme, getTheme } from "../public/helpers/theme";
import { experiences } from "../public/helpers/constants";

const Experience: FunctionComponent<{}> = () => {
  const themeCtx = useContext(ThemeContext);
  const theme: Theme = getTheme(themeCtx.isDark);

  return (
    <Layout id="experience">
      <div className="row">
        <div className="col-12">
          <h2 className={theme.headers.title}>Experience</h2>
        </div>
      </div>
      <div className="pt-4 row">
        <div className="col-md-6">
          <p className={`${theme.headers.header} pb-2`}>
            Looks like you're interested, good to hear!
          </p>
          <p className={`${theme.headers.subHeader} py-3`}>
            I'm currently creating exciting new user experiences
            for Ceridian's Dayforce product as a Software Developer.
          </p>
          <p className={`${theme.headers.subHeader} py-3`}>
            Below you'll find my projects, which is where I spend my
            free time. I love visualizing data and implementing
            powerful & efficient backends.
          </p>
          <p className={`${theme.headers.subHeader} py-3`}>
            My favourite example of both would be my <br/><a href="https://github.com/Specnr/ResetAnalytics">Reset Analytics</a> project!
          </p>
        </div>
        <div className="col-md-6">
          <ExperienceDisplay exp={experiences} />
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
