import React from "react";
import styled from "styled-components";
import errorImg from "../assets/icone_erro.png";
import almostImg from "../assets/icone_quase.png";
import rightImg from "../assets/icone_certo.png";
import sadImg from "../assets/sad.png";

export default function Bottom({answersList, cards}) {
    const [finished, setFinished] = React.useState(false);

    const answersImg = answersList.map((answer) => {
        if (answer === "right") {
            return rightImg;
        }
        else if (answer === "almost") {
            return almostImg;
        }
        return errorImg;
    })

    if (answersList.length === cards.length && finished === false) {
        setFinished(true);
    }

    return (
        <Container data-test="footer">
            {finished &&
                <div className="result">
                    <img src={sadImg} alt="" />
                    <h4>Putz...</h4>
                </div>
            }

            {finished &&
                <p>Ainda faltam alguns...<br/>Mas não desanime!</p>
            }

            <h2>{answersList.length}/{cards.length} CONCLUÍDOS</h2>

            <div className="answers">
                {answersImg.map((answer, index) => (
                    <img src={answer} key={index} alt="Answer" />
                ))}
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70px;
    width: 100%;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    img {
        width: 23px;
    }

    .result {
        display: flex;
        align-items: center;
        gap: 13px;
        margin-top: 15px;
    }

    .answers {
        display: flex;
        gap: 5px;
        margin-bottom: 10px;
    }

    h2,p {
        font-size: 18px;
        margin-top: 9px;
        margin-bottom: 6px;
        text-align: center;
        font-weight: 400;
        line-height: 21px;
    }

    h4 {
        font-size: 18px;
        font-weight: 700;
    }
    
`;