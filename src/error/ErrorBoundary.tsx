// ErrorBoundary.tsx
import React, { Component } from "react";
import type { ReactNode } from "react";

import errorAnimation from "../assets/LottieFiles/errorAnimation.json";
import Lottie from "lottie-react";
import Footer from "../component/common/Footer/Footer";
import Header from "../component/common/Header/Header";
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <Lottie
            animationData={errorAnimation}
            style={{ width: "300px", margin: "40px auto" }}
          />
          <h5 style={{ color: "red", textAlign: "center" }}>
            An unexpected error occurred and will be resolved soon.
          </h5>
          <Footer />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
