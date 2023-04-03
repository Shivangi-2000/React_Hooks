import React, { useContext, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-contex";
//import AuthContext from "./store/auth-contex";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext)

  return (
    <React.Fragment>
      {/* <AuthContext.Provider value={{ isLoggedIn: isLoggedIn,
      onLogout:logoutHandler }}>*/}
        <MainHeader   /> 
        <main>
          {!ctx.isLoggedIn && <Login  />}
          {ctx.isLoggedIn && <Home />}
        </main>
      </React.Fragment>//</AuthContext.Provider>
    
  );
}

export default App;
