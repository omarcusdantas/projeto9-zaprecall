import React from "react";
import { GlobalStyle } from "./style.jsx";
import WelcomeScreen from "./WelcomeScreen.jsx";
import GameScreen from "./GameScreen.jsx";

export default function App() {
    const isGameStarted = true;

    return (
        <>
            <GlobalStyle />
            {!isGameStarted && <WelcomeScreen />}
            {isGameStarted && <GameScreen />}
        </>
    );
}
