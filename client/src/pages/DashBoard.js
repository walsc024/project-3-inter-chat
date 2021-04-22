import React from "react";
import { Grid, Card } from "semantic-ui-react";

import Header from "../components/Header";
import StartButton from "../components/StartButton";
import LangDropdown from "../components/LangDropdown";

class DashBoard extends React.Component {
  render() {
    return (
      <>
        <Header />
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
      </>
    );
  }
}

export default DashBoard;
