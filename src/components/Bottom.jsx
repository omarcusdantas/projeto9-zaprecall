import React from "react";
import styled from "styled-components";
import errorImg from "../assets/icone_erro.png";
import rightImg from "../assets/icone_certo.png";
import sadImg from "../assets/sad.png";

export default function Bottom({answersList, cards}) {
    const finished = false;

    return (
        <Container>
            {finished &&
                <div className="result">
                    <img src={sadImg} alt="" />
                    <h4>Putz...</h4>
                </div>
                &&
                <p>Ainda faltam alguns...<br/>Mas não desanime!</p>
            }

            <h2>{answersList.length}/{cards.length} CONCLUÍDOS</h2>

            {finished &&
                <div className="awnsers">
                    <img src={rightImg} alt="" />
                    <img src={errorImg} alt="" />
                </div>
            }
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

    .awnsers {
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