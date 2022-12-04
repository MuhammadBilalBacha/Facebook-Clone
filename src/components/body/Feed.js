import React, { useEffect, useState } from "react";
import { app } from "../../firebase";
import "./Feed.css";
import MessageSender from "./Feed/MessageSender";
import Post from "./Feed/Post";
import StoryReel from "./StoryReel";
import {
  getDocs,
  getFirestore,
  where,
  query,
  collection,
} from "firebase/firestore";

function Feed() {
  const [post, setPost] = useState([]);
  const firestore = getFirestore(app);

  useEffect(() => {
    const getPosts = async () => {
      const collref = collection(firestore, "posts");
      const q = query(collref, where("getting", "==", true));
      // const [myid,setMyid] = useState(null);
      const snpaShots = await getDocs(q);

      const data = snpaShots.docs.map((pst) => {
        return pst.data();
      });
      // console.log(data);
      return setPost(data);
    };
    getPosts();
  });
  // firebase.firestore.FieldValue.serverTimestamp()
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {post.map((pst) => {
        // console.log(pst.timestamp);
        return (
          <>
            <Post
              keyId={pst.id}
              timestamp={pst.timestamp}
              username={pst.username}
              image={pst.image}
              message={pst.message}
              profilePic={pst.profilePic}
            />
          </>
        );
      })}
    </div>
  );
}

export default Feed;
