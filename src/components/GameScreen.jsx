import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Bottom from "./Bottom.jsx";
import Deck from "./Deck.jsx";
import cards from "../cards.js";

export default function GameScreen() {
    const [answers, setAnswers] = React.useState([]);

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
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 27px;
        height: 153px;
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        background-color: #FB6B6B;

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