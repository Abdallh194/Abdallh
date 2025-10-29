import { Col, Container, Row } from "react-bootstrap";
import labtop from "../../assets/LottieFiles/labtop.json";
import Lottie from "lottie-react";
import {
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
const LandingSkills = () => {
  const skillsdata = [
    {
      id: 1,
      skill_name: "HTML5",
      skill_press: 100,
      skill_icon: <FaHtml5 />,
    },
    {
      id: 2,
      skill_name: "CSS3",
      skill_press: 100,
      skill_icon: <FaCss3 />,
    },
    {
      id: 3,
      skill_name: "JAVASCRIPT",
      skill_press: 80,
      skill_icon: <FaJs />,
    },
    {
      id: 4,
      skill_name: "SASS",
      skill_press: 98,
      skill_icon: <FaSass />,
    },
    {
      id: 5,
      skill_name: "REACTJS",
      skill_press: 80,
      skill_icon: <FaReact />,
    },
    {
      id: 6,
      skill_name: "NEXTJS",
      skill_press: 80,
      skill_icon: <SiNextdotjs />,
    },
    {
      id: 7,
      skill_name: "GITHUB",
      skill_press: 90,
      skill_icon: <FaGithub />,
    },
    {
      id: 8,
      skill_name: "REDUX",
      skill_press: 80,
      skill_icon: <SiRedux />,
    },
    {
      id: 9,
      skill_name: "BOOTSTRAP",
      skill_press: 90,
      skill_icon: <FaBootstrap />,
    },
    {
      id: 10,
      skill_name: "Problem Solving",
      skill_press: 90,
      skill_icon: <GiBrain />,
    },
    {
      id: 11,
      skill_name: "TypeScript",
      skill_press: 80,
      skill_icon: <SiTypescript />,
    },
  ];
  return (
    <div className="LandingSkills" id="Skills">
      <Container>
        <div className="head">MY SKILLS</div>
        <Row>
          <Col md={12} lg={6}>
            {skillsdata.map((d, idx) => (
              <div className="con_skill" key={idx}>
                <div className="skill_name">
                  {d.skill_name} {d.skill_icon}
                </div>
                <div className="skill_container" data-length={d.skill_press}>
                  <div
                    className="skill_press bg-linner "
                    style={{ width: `${d.skill_press}%` }}
                    data-length={d.skill_press}
                  ></div>
                </div>
              </div>
            ))}
          </Col>
          <Col md={12} lg={6}>
            <Lottie animationData={labtop} className="ani" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingSkills;
