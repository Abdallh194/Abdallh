import Lottie from "lottie-react";
import loader from "../assets/LottieFiles/loader.json";

const Loading = () => {
  return (
    <Lottie
      animationData={loader}
      style={{ width: "300px", margin: "40px auto" }}
    />
  );
};

export default Loading;
