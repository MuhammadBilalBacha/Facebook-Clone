import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Auth } from "./Login/Auth";

function Sidebar() {
  const { user } = useContext(Auth);

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Friends" />
      <SidebarRow Icon={EmojiPeopleIcon} title="Pages" />
      <SidebarRow Icon={ChatBubbleIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Market Place" />
    </div>
  );
}

export default Sidebar;
