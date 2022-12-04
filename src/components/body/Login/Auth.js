import { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app, auth } from "../../../firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const Auth = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const firestore = getFirestore(app);

  const reducerFunc = (state, action) => {
    console.log(action);
    if (action.type === "SET_USER") {
      return {
        ...state,
        user: action.user,
      };
    } else {
      return state;
    }
  };

  const googleSignIn = () => {
    // const [state, dispatch] = useStateValue();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      setUser(result.user);
    });
  };
  const addPosts = async (msg, img) => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    // console.log(dateTime);
    try {
      await addDoc(collection(firestore, "posts"), {
        id: new Date().getDate().toFixed(),
        getting: true,
        message: msg,
        image: img,
        profilePic: user.photoURL,
        username: user.displayName,
        timestamp: dateTime,
      });

      //  console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const logout = () => {
    return setUser();
  };

  return (
    <Auth.Provider
      value={{ googleSignIn, user, addPosts, logout, reducerFunc }}
    >
      {children}
    </Auth.Provider>
  );
};

// export default Auth;
