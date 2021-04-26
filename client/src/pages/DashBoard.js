import React from "react";
import { Grid, Card } from "semantic-ui-react";
import LogoutButton from "../components/LogoutButton";
import StartButton from "../components/StartButton";
import LangDropdown from "../components/LangDropdown";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user } = useAuth0();
  return (
    <>
      <LogoutButton />
      <Card centered>
        <Card.Content>
          <Grid centered>
            <Grid.Column>
              <LangDropdown />
              <br />
              <StartButton />
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
      <p>{user.sub}</p>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.nickname}</p>
    </>
  );
};

export default Dashboard;
