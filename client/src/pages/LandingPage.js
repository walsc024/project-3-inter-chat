import React from "react";

import SignUpForm from "../components/SignUpForm";
import LoginButton from "../components/LandingHeader";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <LoginButton />
        <SignUpForm />
      </>
    );
  }
}

export default LandingPage;
