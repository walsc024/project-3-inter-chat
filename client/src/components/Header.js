import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu secondary>
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

// const Header = () => (
//   <Menu secondary>
//     <Menu.Menu position="right">
//       <Menu.Item
//         name="logout"
//         active={activeItem === "logout"}
//         onClick={this.handleItemClick}
//       />
//     </Menu.Menu>
//   </Menu>
// );

export default Header;
