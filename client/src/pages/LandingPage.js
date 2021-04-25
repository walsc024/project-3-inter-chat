import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SignUpForm from "../components/SignUpForm";
import LoginButton from "../components/LoginButton";
import Dashboard from "./DashBoard";

const LandingPage = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <>
        <LoginButton />
        <SignUpForm />
      </>
    );
  }
  return (
    <>
      <Dashboard />
    </>
  );
};

export default LandingPage;
