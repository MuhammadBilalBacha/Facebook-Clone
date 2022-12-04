import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "./images.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, IconButton } from "@mui/material";
import { Auth } from "../body/Login/Auth";
// import { useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useContext(Auth);
  const [btn, setBtn] = useState(false);
  // const Navigate = useNavigate();
  const showbtn = () => {
    return setBtn(!btn);
  };
  const logoutHandler = () => {
    return logout();
  };

  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header_middle">
        <div className="header_option header_option--active">
          <HomeIcon />
        </div>
        <div className="header_option">
          <FlagIcon />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon />
        </div>
        <div className="header_option">
          <StoreMallDirectoryOutlinedIcon />
        </div>
        <div className="header_option">
          <SupervisedUserCircleOutlinedIcon />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <span>
            <span className="logout" onClick={showbtn}>
              <Avatar src={user.photoURL} />
              <h4>{user.displayName}</h4>
            </span>
            {btn && (
              <button className="mybtn" onClick={logoutHandler}>
                Logout
              </button>
            )}
          </span>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumOutlinedIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
