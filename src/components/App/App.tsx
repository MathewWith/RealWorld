import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import Header from "../Header";
import Home from "src/components/Pages/Home";
import "./App.scss";
import SignIn from "src/components/Pages/Auth/SignIn";
import SignUp from "src/components/Pages/Auth/SignUp";
import setRequestInterceptor from "src/shared/interceptor/interceptor";
import { useActions } from "src/hooks/useActions";
import UserProfile from "../UserProfile";
import { UserState } from "src/types/UserTypes";
import { useTypedSelector } from "src/hooks/useTypedSelector";

function App() {
  setRequestInterceptor();
  const data: UserState = useTypedSelector((state) => state.user);
  const { getAuthUser, getArticles, getDefaultTags } = useActions();
  useEffect(() => {
    const getData = async () => {
      await Promise.all(
        [getArticles(),
        getDefaultTags(),
        getAuthUser()
      ]
      )
      // await getArticles();
      // await getDefaultTags();
      // if (localStorage.getItem("JWT")) {
      //   await getAuthUser();
      // }
    };
    getData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile/:username" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
