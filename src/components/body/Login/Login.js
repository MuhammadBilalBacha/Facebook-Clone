import { Button } from "@mui/material";
import React, { useContext } from "react";
// import { auth } from "../../../firebase";
import "./Login.css";
import { Auth } from "./Auth";
// import { useStateValue } from "./StateProvider";

function Login() {
  // const [state, dispatch] = useStateValue();
  // const { Hillo } = UserAuth();
  // const { googleSignIn } = UserAuth();

  const { googleSignIn } = useContext(Auth);

  const SignIn = async () => {
    try {
      await googleSignIn();
      // dispatch({
      //   // type: actionTypes.SET_USER,
      //   // user: user,
      // });
    } catch (error) {
      console.log(error);
    }
    // sign in
    // auth
    //   .signInWithPopup(provider)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg"
          alt=""
        />
        <img
          src="https://www.freeiconspng.com/uploads/facebook-text-transparent-logo-23.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={SignIn}>
        Sign in
      </Button>
    </div>
  );
}

export default Login;
