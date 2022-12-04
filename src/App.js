import { useContext } from "react";
import "./App.css";
import Feed from "./components/body/Feed";
import { Auth } from "./components/body/Login/Auth";
import Login from "./components/body/Login/Login";
import Sidebar from "./components/body/Sidebar";
import Header from "./components/Header/Header";

function App() {
  const { user } = useContext(Auth);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            {/* <Widgets /> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
