import React from "react";
import { Grid } from "semantic-ui-react";

import Header from "../components/Header";
import StartButton from "../components/StartButton";

class DashBoard extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Grid verticalAlign="middle" centered>
          <Grid.Column>
            <StartButton />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default DashBoard;
