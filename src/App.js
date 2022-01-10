import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignUpPage";
import TodayPage from "./Components/TodayPage";
import HabitsPage from "./Components/HabitsPage";
import HistoryPage from "./Components/HistoryPage";
import HistoryDatePage from "./Components/HistoryDatePage";

import UserContext from "./contexts/UserContext";
import { useEffect } from "react";

export default function App() {

  const [token, setToken] = useState([])
  const [percentageToday, setPercentageToday] = useState([0])

  useEffect(() => {
    const tokenOnLocalStorage = JSON.parse(localStorage.getItem("userInfo"));

    setToken(tokenOnLocalStorage)
  }, []);


  return (
    <BrowserRouter>
      <AppStyled>
        <UserContext.Provider value={{ token, setToken, percentageToday, setPercentageToday }}>
          <Routes>
            <Route path="/" element={<SignInPage sessionToken={setToken} />}></Route>
            <Route path="/cadastro" element={<SignUpPage />}></Route>
            <Route path="/hoje" element={<TodayPage />}></Route>
            <Route path="/habitos" element={<HabitsPage />}></Route>
            <Route path="/historico" element={<HistoryPage />}></Route>
            <Route path="/historico/:dateId" element={<HistoryDatePage />}></Route>
          </Routes>
        </UserContext.Provider>
      </AppStyled>
    </BrowserRouter >
  );
}


const AppStyled = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Playball&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&display=swap');

// font-family: 'Playball', cursive; Font for LogoType
font-family: 'Lexend Deca', sans-serif;

width: 100vw;
height: 100vh;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



`