import React from "react";
import styled from "styled-components";
import playImg from "../assets/seta_play.png";
import turnImg from "../assets/seta_virar.png";

export default function Card() {

    return (
        <>
            <CardClosed>
                <h3>Pergunta 1</h3>
                <img src={playImg} alt="Play" />
            </CardClosed>
            <Question>
                <h3>Question</h3>
                <img src={turnImg} alt="Play" />
            </Question>
            <Awnser>
                <h3>Awnser</h3>
                <div className="card-menu">
                    <button>Não lembrei</button>
                    <button>Quase não lembrei</button>
                    <button>Zap!</button>
                </div>
            </Awnser>
        </>
    );
}

const CardContainer = styled.div`
    min-width: 300px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    padding: 15px;

    img {
        height: 22px;
        cursor: pointer;
    }
`

const CardClosed = styled(CardContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 65px;
    background-color: #ffffff;

    h3 {
        font-weight: 700;
        font-size: 16px;
        text-decoration-line: line-through;
    }
`;

const Question = styled(CardContainer)`
    min-height: 131px;
    background-color: #FFFFD4;
    position: relative;

    h3 {
        font-weight: 400;
        font-size: 18px;
    }

    img {
        position: absolute;
        bottom: 6px;
        right: 15px;
    }

`;

const Awnser = styled(CardContainer)`
    min-height: 131px;
    background-color: #FFFFD4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-menu {
        display: flex;
        gap: 8px;
        justify-content: center;
    }

    h3 {
        font-weight: 400;
        font-size: 18px;
    }

    button {
        width: 85px;
        height: 37px;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 12px;
        font-family: "Recursive", serif;
        cursor: pointer;
        padding: 0 10px;

        &:first-child {
            background-color: #FF3030;
        }

        &:nth-child(2) {
            background-color: #FF922E;;
        }

        &:last-child {
            background-color: #2FBE34;;
        }
    }
`;