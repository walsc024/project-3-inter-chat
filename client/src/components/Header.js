import React from "react";
import { Menu } from "semantic-ui-react";
import { useAuth0 } from "@auth0/auth0-react";

// class Header extends Component {
//   state = { activeItem: "" };

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
//   render() {
//     const { activeItem } = this.state;
const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
      <div>
        <Menu secondary>
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              // active={activeItem === "logout"}
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
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

export default LogoutButton;
