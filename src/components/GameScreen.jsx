import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Bottom from "./Bottom.jsx";
import Deck from "./Deck.jsx";
import cards from "../cards.js";

export default function GameScreen() {
    //State variable to save answers
    const [answers, setAnswers] = React.useState([]);

    //Function to save answers
    function addAnswer(result) {
        setAnswers([...answers, result]);
    }

    return (
        <Container>
            <div className="logo">
                <img src={logo} alt="ZapRecall" />
                <h1>ZapRecall</h1>
            </div>
            <Deck handleClick={addAnswer} cards={cards}></Deck>
            <Bottom answersList={answers} cards={cards}></Bottom>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .logo {
        background-color: #fb6b6b;
        width: 100%;
        height: 153px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 27px;
        position: fixed;
        top: 0;
        z-index: 1;

        img {
            width: 52px;
        }
    }

    h1 {
        color: #ffffff;
        font-family: "Righteous", sans-serif;
        font-size: 36px;
        font-weight: 400;
    }
`;
