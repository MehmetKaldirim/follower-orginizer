import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Table from "./components/Table/Table";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import CssDeneme from "./CSSDeneme";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {isAuth && <CssDeneme />}
      <Counter />
    </Fragment>
  );
}

export default App;
