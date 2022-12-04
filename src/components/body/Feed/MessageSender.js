import React, { useContext, useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Auth } from "../Login/Auth";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { user, addPosts } = useContext(Auth);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const ImageHandler = (e) => {
    setImageUrl(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    addPosts(input, imageUrl);

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageTop">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={inputHandler}
            className="messageInput"
            type="text"
            placeholder={`What's on your mind ? ${user.displayName}`}
          />
          <input
            value={imageUrl}
            onChange={ImageHandler}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button type="submit" onClick={handlerSubmit}>
            Hidder Submit
          </button>
        </form>
      </div>

      <div className="messageBottom">
        <div className="messageOption">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageOption">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageOption">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
