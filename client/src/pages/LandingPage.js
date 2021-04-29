import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SignUpForm from "../components/SignUpForm";
import LoginButton from "../components/LoginButton";
import Dashboard from "./DashBoard";
import SignUpButton from "../components/SignUpButton";
import { Grid, Card, Image, Divider, Container } from "semantic-ui-react";
import NavBar from "../components/NavBar";
import Graphic from "../Images/graphic.png";
import Logo from "../Images/logo.png";

const LandingPage = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <>
        <NavBar />
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column style={{ paddingTop: "7.5em" }}>
            <img
              className="graphic"
              src={Graphic}
              alt={""}
              width="800"
              height="800"
            />
          </Grid.Column>
          <Grid.Column style={{ paddingTop: "7em" }} verticalAlign="middle">
            <Container size="large">
              <Card
                centered
                style={{
                  height: "350px",
                  width: "600px",
                }}
              >
                <Card.Content textAlign="center">
                  <Image
                    size="medium"
                    className="logo"
                    src={Logo}
                    alt={""}
                    style={{ paddingBottom: "1em" }}
                  />
                  <Card.Header textAlign="center"></Card.Header>
                  <Card.Description textAlign="center">
                    Please <strong>Log In</strong> or <strong>Sign Up</strong>{" "}
                    to continue using our app.
                  </Card.Description>
                </Card.Content>
                <Card.Content
                  style={{ height: "175px" }}
                  textAlign="center"
                  extra
                >
                  <LoginButton />
                  <Divider horizontal>Or</Divider>
                  <SignUpButton />
                </Card.Content>
              </Card>
            </Container>
          </Grid.Column>
        </Grid>
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
