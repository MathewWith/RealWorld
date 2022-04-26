import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../Header";
import Home from "src/components/Pages/Home";
import "./App.scss";
import SignIn from "src/components/Pages/Auth/SignIn";
import SignUp from "src/components/Pages/Auth/SignUp";
import setRequestInterceptor from "src/shared/interceptor/interceptor";
import { useActions } from "src/hooks/useActions";

function App() {
  setRequestInterceptor();
  const { getDataForArticles } = useActions();
  useEffect(() => {
    const gettingData = async () => {
      await getDataForArticles();
    };
    gettingData();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
