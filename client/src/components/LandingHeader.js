import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

class LandingHeader extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input placeholder="Email Address..." />
          </Menu.Item>
          <Menu.Item>
            <Input placeholder="Password..." />
          </Menu.Item>
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default LandingHeader;
