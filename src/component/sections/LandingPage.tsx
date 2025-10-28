import { Col, Container, Row } from "react-bootstrap";
import Socials from "./Socials";

const LandingPage = () => {
  const imgsrc = [
    {
      id: 1,
      src: "/avatar1.jpg",
    },
    {
      id: 2,
      src: "/avatar2.jpg",
    },
    {
      id: 3,
      src: "/avatar3.jpg",
    },
    {
      id: 4,
      src: "/avatar4.jpg",
    },
  ];
  return (
    <div className="LandingPage">
      <div className="clip bg-linner"></div>
      <Container>
        <div className="hello-wrd">HELLO</div>
        <Row>
          <Col md={12} lg={6} className="info-card">
            <div className="top_t">Hello There Iam</div>
            <div className="name">Abdallh Rakha</div>
            <div className="desc">
              <span>Creative</span> FrontEnd
            </div>
            <div className="exp">
              With 4+ Years Of Experience skilled Front-End Developer
            </div>
            <div className="d-flex btns">
              <a
                href="https://flowcv.com/resume/stsjfae5hn8r"
                target="_blank"
                className="show-resume bg-linner btn-g"
              >
                Show Resume
              </a>
              <a href="#AboutMe" className="show-work btn-g">
                Show Work
              </a>
            </div>
            <div className="recent-clients center-hir">
              <div className="d-flex">
                {imgsrc.map((src, i) => (
                  <img src={src.src} key={i} className="img-fluid avatar" />
                ))}
                <div className="res_num avatar center-hir">+20</div>
              </div>
              <div className="recent_tot">
                <div>24+</div> Recent Clients
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} className="img-card">
            <img src="/pub-img.png" className="img-fluid" alt="abdallh" />
            <Socials />
          </Col>
          <Col md={12} lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
