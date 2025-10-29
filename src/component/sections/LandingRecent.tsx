import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const LandingRecent = () => {
  const RecentWorkDate = [
    {
      id: 1,
      title: "seometta",
      workdesk:
        "Turning ideas into interactive reality. I build with purpose,creating websites ",
      imgsrc: "/work1.png",
      link: "https://www.seometta.com/",
    },
    {
      id: 2,
      title: "plasteca",
      workdesk:
        "Turning ideas into interactive reality. I build with purpose,creating websites ",
      imgsrc: "/work2.png",
      link: "https://plast-nine.vercel.app/",
    },
    {
      id: 3,
      title: "Eshrak",
      workdesk:
        "Turning ideas into interactive reality. I build with purpose,creating websites ",
      imgsrc: "/work3.png",
      link: "https://eshark-orcin.vercel.app/",
    },
    {
      id: 4,
      title: "ASR Travel",
      workdesk:
        "Turning ideas into interactive reality. I build with purpose,creating websites ",
      imgsrc: "/work4.png",
      link: "https://asr-advisor.vercel.app/",
    },
    {
      id: 5,
      title: "maktabti",
      workdesk:
        "Turning ideas into interactive reality. I build with purpose,creating websites ",
      imgsrc: "/work5.png",
      link: "https://booky-peach.vercel.app/",
    },
    {
      id: 6,
      title: "HomeBity",
      workdesk:
        "Turning ideas into interactive reality. I build with purpose,creating websites ",
      imgsrc: "/work6.png",
      link: "https://home-bity.vercel.app/",
    },
    {
      id: 7,
      title: "ASR Store",
      workdesk:
        "Turning ideas into interactive reality. I build with purpose,creating websites ",
      imgsrc: "/work7.png",
      link: "exclusive-ecommerce-two.vercel.app",
    },
    {
      id: 8,
      title: "ASR Media",
      workdesk:
        "Turning ideas into interactive reality. I build with purpose,creating websites ",
      imgsrc: "/work8.jpg",
      link: "https://asrmedia.netlify.app/",
    },
  ];
  return (
    <div className="LandingRecent" id="Blog">
      <Container fluid>
        <div className="head">RECENT WORK</div>
        <div className="main-head">
          Take A Look At My{" "}
          <div className="sub">
            Recent <span className="bg-linner">REACTJS , NEXTJS Project</span>
          </div>
        </div>
        <Row>
          {RecentWorkDate.map((e, idx) => (
            <Col md={12} lg={3} key={idx} className="work-card">
              <div className="work-title">{e.title}</div>
              <div className="work-desc">{e.workdesk}</div>
              <img src={e.imgsrc} alt={e.title} className="img-fluid" />
              <div className="d-flex justify-content-between mt-3">
                <div className="try">
                  try now <BsArrowRight />
                </div>
                <a href={e.link} target="_blank" className="demo">
                  Live Demo <FaEye />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LandingRecent;
