import React from "react";
import { GlobalStyle } from "./style.jsx";
import WelcomeScreen from "./WelcomeScreen.jsx";
import GameScreen from "./GameScreen.jsx";

export default function App() {
    const [isGameStarted, setIsGameStarted] = React.useState(false);

    function startGame() {
        setIsGameStarted(true);
    }

    return (
        <>
            <GlobalStyle />
            {!isGameStarted && <WelcomeScreen handleClick={startGame} />}
            {isGameStarted && <GameScreen />}
        </>
    );
}
