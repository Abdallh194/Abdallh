import Lottie from "lottie-react";
import Footer from "../component/common/Footer/Footer";
import Header from "../component/common/Header/Header";
import not_found from "../assets/LottieFiles/not_found.json";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <div className="not_found">
      <Header />
      <Container fluid>
        <Lottie
          animationData={not_found}
          style={{ width: "500px", margin: "40px auto" }}
          className="animation"
        />
        <div className="main-head">Page not founds</div>
        <div className="main-desc">
          It appears you've reached an invalid or redirected link{" "}
          <Link to="/" replace className="back-link">
            Home
          </Link>{" "}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default NotFound;
