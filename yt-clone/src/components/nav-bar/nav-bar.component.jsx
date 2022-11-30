import { Component } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbCameraPlus } from "react-icons/tb";
import SearchBar from "../search-box/search-box.component";
import { Nav } from "./nav-bar.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <button>
          <AiTwotoneHome />
        </button>
        <SearchBar />
        <button>
          <IoMdNotificationsOutline />
        </button>

        <button>
          <TbCameraPlus />
        </button>

        <Link to="/login">Sign Out</Link>
      </Nav>
    );
  }
}

export default NavBar;
