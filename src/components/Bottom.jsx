import React from "react";
import styled from "styled-components";
import errorImg from "../assets/icone_erro.png";
import almostImg from "../assets/icone_quase.png";
import rightImg from "../assets/icone_certo.png";
import sadImg from "../assets/sad.png";
import allRightImg from "../assets/party.png";

export default function Bottom({ answersList, cards }) {
    //State variable to manage game completion
    const [finished, setFinished] = React.useState({
        status: false,
        allRight: true,
    });

    //Array to save answers icons
    const answersImg = answersList.map((answer) => {
        if (answer === "right") {
            return [rightImg, "zap-icon"];
        } else if (answer === "almost") {
            return [almostImg, "partial-icon"];
        }
        return [errorImg, "no-icon"];
    });

    //Change state when game is finished
    if (answersList.length === cards.length && finished.status === false) {
        if (answersList.includes("wrong")) {
            setFinished({ status: true, allRight: false });
            return;
        }
        setFinished({ status: true, allRight: true });
    }

    return (
        <Container data-test="footer">
            {finished.status && (
                <div data-test="finish-text">
                    <div className="result">
                        <img
                            src={finished.allRight ? allRightImg : sadImg}
                            alt="Finished"
                        />
                        <h4>{finished.allRight ? "Parabéns!" : "Putz..."}</h4>
                    </div>
                    <p>
                        {finished.allRight
                            ? "Você não esqueceu de nenhum flashcard!"
                            : "Ainda faltam alguns... Mas não desanime!"}
                    </p>
                </div>
            )}

            <h2>
                {answersList.length}/{cards.length} CONCLUÍDOS
            </h2>

            <div className="answers">
                {answersImg.map((answer, index) => (
                    <img
                        src={answer[0]}
                        key={index}
                        data-test={answer[1]}
                        alt="Answer"
                    />
                ))}
            </div>
        </Container>
    );
}

const Container = styled.div`
    background-color: #ffffff;
    width: 100%;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    img {
        width: 23px;
    }

    .result {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 13px;
    }

    .answers {
        margin-bottom: 10px;
        display: flex;
        gap: 5px;
    }

    h2,
    p {
        font-size: 18px;
        text-align: center;
        font-weight: 400;
        line-height: 21px;
        width: 220px;
        margin: 9px 0 6px 0;
    }

    h4 {
        font-size: 18px;
        font-weight: 700;
    }
`;
