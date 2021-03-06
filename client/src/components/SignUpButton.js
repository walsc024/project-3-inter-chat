import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      size="huge"
      fluid
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;
