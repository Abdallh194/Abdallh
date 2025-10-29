import { Col, Container, Row } from "react-bootstrap";
import { BsClockHistory } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { GiElectricalCrescent } from "react-icons/gi";
import { LuListChecks } from "react-icons/lu";

const LandingAbout = () => {
  const Cardsdata = [
    {
      id: 1,
      icon: <FaLightbulb />,
      header: "Creative Brainstorming",
      desc: "I transform your ideas into innovative design solutions that surpass your initial vision.",
      className: "about-card",
    },
    {
      id: 2,
      icon: <GiElectricalCrescent />,
      header: "Dedication & Drive",
      desc: "I pour all my energy into building exceptional web interfaces, never settling for less than perfection.",
      className: "about-card cus-card",
    },
    {
      id: 3,
      icon: <LuListChecks />,
      header: "Design Testing & Precision",
      desc: "We meticulously plan and test every detail to ensure an intuitive, user-friendly experience.",
      className: "about-card",
    },
    {
      id: 4,
      icon: <BsClockHistory />,
      header: "Guaranteed On-Time Delivery",
      desc: "Committed to deadlines, I deliver on time with transparent communication throughout the process.",
      className: "about-card cus-card",
    },
  ];
  return (
    <div id="AboutMe" className="LandingAbout">
      <div className="overlay"></div>
      <Container>
        <div className="top-t">ABOUT ME</div>
        <Row>
          <Col md={12} lg={6}>
            <div className="main-head">
              Hello, I'm Abdallh Rakha A <span>Creative</span> Front-End
              Developer
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="main-desc">
              Turning ideas into interactive reality. I build with purpose,
              creating websites that are not just visually stunning but also
              robust, scalable, and user-focused.
            </div>
          </Col>
          {Cardsdata.map((card, idx) => (
            <Col md={12} lg={3} className={card.className} key={idx}>
              <div className="icon bg-linner center-hir ">{card.icon}</div>
              <div className="card-header">{card.header}</div>
              <div className="card-desc">{card.desc}</div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LandingAbout;
