import React from "react";

import SignUpForm from "../components/SignUpForm";
import LandingHeader from "../components/LandingHeader";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <LandingHeader />
        <SignUpForm />
      </>
    );
  }
}

export default LandingPage;
