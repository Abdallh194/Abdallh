import { Col, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

const LandingRecent = () => {
  const RecentWorkDate = [
    {
      id: 1,
      title: "seometta",
      workdesk:
        "A professional SEO and digital marketing website that helps businesses build a strong online presence.",
      imgsrc: "/work1.png",
      link: "https://www.seometta.com/",
    },
    {
      id: 2,
      title: "plasteca",
      workdesk:
        "An industrial company website showcasing high-quality plastic products and sustainability since 1996.",
      imgsrc: "/work2.png",
      link: "https://plast-nine.vercel.app/",
    },
    {
      id: 3,
      title: "Eshrak",
      workdesk:
        "A digital healthcare platform offering secure and fast online doctor consultations and appointments.",
      imgsrc: "/work3.png",
      link: "https://eshark-orcin.vercel.app/",
    },
    {
      id: 4,
      title: "ASR Travel",
      workdesk:
        "A travel website featuring top deals and global experiences, especially focused on Cairo adventures.",
      imgsrc: "/work4.png",
      link: "https://asr-advisor.vercel.app/",
    },
    {
      id: 5,
      title: "maktabti",
      workdesk:
        "A cultural platform for discovering, reading, and purchasing books in both digital and print formats. ",
      imgsrc: "/work5.png",
      link: "https://booky-peach.vercel.app/",
    },
    {
      id: 6,
      title: "HomeBity",
      workdesk:
        "A real estate website that helps users find elegant and well-designed homes with ease.",
      imgsrc: "/work6.png",
      link: "https://home-bity.vercel.app/",
    },
    {
      id: 7,
      title: "ASR Store",
      workdesk:
        "An eCommerce platform offering a wide range of products and exclusive deals on tech and more.",
      imgsrc: "/work7.png",
      link: "https://exclusive-ecommerce-two.vercel.app",
    },
    {
      id: 8,
      title: "ASR Media",
      workdesk:
        "An entertainment website for streaming videos, news, and diverse multimedia content.",
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
