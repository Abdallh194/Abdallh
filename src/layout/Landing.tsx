import LandingAbout from "../component/sections/LandingAbout";
import LandingPage from "../component/sections/LandingPage";
import LandingRecent from "../component/sections/LandingRecent";
import LandingSkills from "../component/sections/LandingSkills";

const Landing = () => {
  return (
    <>
      <LandingPage />
      <LandingAbout />
      <LandingRecent />
      <LandingSkills />
    </>
  );
};

export default Landing;
