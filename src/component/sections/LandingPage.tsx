import { Col, Container, Row } from "react-bootstrap";
import Socials from "./Socials";

const LandingPage = () => {
  const imgsrc = [
    {
      id: 1,
      src: "/avatar1.jpg",
      alt: "abdallh sabry client freelance",
    },
    {
      id: 2,
      src: "/avatar2.jpg",
      alt: "abdallh sabry client freelance",
    },
    {
      id: 3,
      src: "/avatar3.jpg",
      alt: "abdallh sabry client freelance",
    },
    {
      id: 4,
      src: "/avatar4.jpg",
      alt: "abdallh sabry client freelance",
    },
  ];
  return (
    <>
      <div className="LandingPage">
        <h1 className="clip bg-linner"></h1>
        <Container>
          <div className="hello-wrd">HELLO</div>
          <Row>
            <Col md={12} lg={6} className="info-card">
              <h2 className="top_t">Hello There Iam</h2>
              <h3 className="name">Abdallh Rakha</h3>
              <h4 className="desc">
                <span>Creative</span> FrontEnd
              </h4>
              <div className="exp">
                With 4+ Years Of Experience skilled Front-End Developer
              </div>
              <h5 className="d-flex btns">
                <a
                  href="/Abdallh.pdf"
                  target="_blank"
                  className="show-resume bg-linner btn-g"
                >
                  Show Resume
                </a>
                <a href="#Blog" className="show-work btn-g">
                  Show Work
                </a>
              </h5>
              <div className="recent-clients center-hir">
                <div className="d-flex">
                  {imgsrc.map((src, i) => (
                    <img
                      src={src.src}
                      key={i}
                      className="img-fluid avatar"
                      alt={src.alt}
                    />
                  ))}
                  <div className="res_num avatar center-hir">+20</div>
                </div>
                <div className="recent_tot">
                  <div>24+</div> Recent Clients
                </div>
              </div>
            </Col>
            <Col md={12} lg={6} className="img-card">
              <img
                src="/pub-img.png"
                className="img-fluid"
                alt="abdallh sabry"
              />
              <Socials />
            </Col>
            <Col md={12} lg={6}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
