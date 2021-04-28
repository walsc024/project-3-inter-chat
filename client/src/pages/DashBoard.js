import React from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Grid, Card } from "semantic-ui-react";
import { Placeholder, Image, Menu, Segment } from "semantic-ui-react";

import Logo from "../Images/logo.png";

import LogoutButton from "../components/LogoutButton";
import StartButton from "../components/StartButton";
import LangDropdown from "../components/LangDropdown";
import useSocket from "../hooks/useSocket";

const Dashboard = () => {
  const { user } = useAuth0();
  const { matchNewUser } = useSocket();

  return (
    <>
      <Menu size="large" borderless shadowless fixed="top">
        <Menu.Item>
          <>
            <Image size="small" className="logo" src={Logo} alt={""} />
          </>
        </Menu.Item>
        <Menu.Item position="right">
          <LogoutButton />
        </Menu.Item>
      </Menu>
      <Grid columns={2} relaxed="very" stackable>
        <Grid.Column style={{ paddingTop: "10em" }} verticalAlign="middle">
          <Card centered style={{ height: "250px", width: "500px" }}>
            <Card.Content>
              <Grid centered>
                <Grid.Column>
                  <LangDropdown onComplete={matchNewUser} />
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column style={{ paddingTop: "7em" }} verticalAlign="middle">
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid>
      {/* <p>{user.sub}</p>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.nickname}</p> */}
    </>
  );
};

export default Dashboard;
