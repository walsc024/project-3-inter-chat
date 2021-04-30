import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Grid, Card } from "semantic-ui-react";
import { Placeholder, Image, Menu } from "semantic-ui-react";

import Logo from "../Images/logo.png";

import LogoutButton from "../components/LogoutButton";
import LangDropdown from "../components/LangDropdown";
import SocketContext from "../context/SocketContext";
import Queueing from "../components/WaitingRoom";
import Placeholder from "../components/Placeholder";

const Dashboard = () => {
  const { user } = useAuth0();
  console.log("I am the user: ", user);
  const { matchNewUser, queueing } = useContext(SocketContext);

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
      <Grid relaxed="very" stackable>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column
          width={7}
          style={{ paddingTop: "10em" }}
          verticalAlign="middle"
        >
          <Card centered style={{ height: "250px", width: "500px" }}>
            <Card.Content>
              <Grid centered>
                <Grid.Column>
                  {queueing ? (
                    <div>
                      <Queueing />
                    </div>
                  ) : (
                    <LangDropdown onComplete={matchNewUser} />
                  )}
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column
          width={7}
          style={{ paddingTop: "7em" }}
          verticalAlign="middle"
        >
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid>
      {/* <p>{user.sub}</p>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.nickname}</p> */}
    </>
  );
};

export default Dashboard;
