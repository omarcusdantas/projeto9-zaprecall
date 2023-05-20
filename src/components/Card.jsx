import React from "react";
import styled from "styled-components";
import playImg from "../assets/seta_play.png";
import turnImg from "../assets/seta_virar.png";
import almostImg from "../assets/icone_quase.png";
import wrongImg from "../assets/icone_erro.png";
import rightImg from "../assets/icone_certo.png";

export default function Card({number, cardInfo, handleClick}) {
    const [cardState, setCardState] = React.useState("back");
    const [iconTestAttribute, setIconTestAttribute] = React.useState("zap-icon");
    const [resultImg, setResultImg] = React.useState(rightImg);
    const [resultStyle, setResultStyle] = React.useState({color: "#333333", decoration: "none"});

    function checkAnswer(result) {
        if (result === "wrong") {
            setResultImg(wrongImg);
            setResultStyle({color: "#FF3030", decoration: "line-through"});
            handleClick("wrong");
            setIconTestAttribute("no-icon");
            setCardState("result");
            return;
        }
        else if (result === "almost") {
            setResultImg(almostImg);
            setResultStyle({color: "#FF922E", decoration: "line-through"});
            handleClick("almost");
            setIconTestAttribute("partial-icon");
            setCardState("result");
            return;
        }
        setResultStyle({color: "#2FBE34", decoration: "line-through"});
        handleClick("right")
        setCardState("result");
        return;
    }

    return (
        <div data-test="flashcard">  
            {cardState === "back" && 
                <CardClosed style={resultStyle}>
                <h3 data-test="flashcard-text">Pergunta {number}</h3>
                <img src={playImg} alt="Play" onClick={() => setCardState("question")} data-test="play-btn"/>
                </CardClosed>
            }
            {cardState === "question" &&
                <Question>
                    <h3 data-test="flashcard-text">{cardInfo.question}</h3>
                    <img src={turnImg} alt="Turn" onClick={() => setCardState("answer")} data-test="turn-btn"/>
                </Question>
            }
            {cardState === "answer" &&
                <Answer>
                    <h3 data-test="flashcard-text">{cardInfo.answer}</h3>
                    <div className="card-menu">
                        <button onClick={() => checkAnswer("wrong")} data-test="no-btn">Não lembrei</button>
                        <button onClick={() => checkAnswer("almost")} data-test="partial-btn">Quase não lembrei</button>
                        <button onClick={() => checkAnswer("right")} data-test="zap-btn">Zap!</button>
                    </div>
                </Answer>
            }
            {cardState === "result" && 
                <CardClosed style={resultStyle}>
                    <h3 data-test="flashcard-text">Pergunta {number}</h3>
                    <img src={resultImg} alt="Result" data-test={iconTestAttribute}/>
                </CardClosed>
            }
        </div>
    );
}

const CardContainer = styled.div`
    width: 300px;
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
    color: ${props => props.style.color};

    h3 {
        font-weight: 700;
        font-size: 16px;
        text-decoration: ${props => props.style.decoration};
    }
`;

const Question = styled(CardContainer)`
    min-height: 130px;
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

const Answer = styled(CardContainer)`
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