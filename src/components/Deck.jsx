import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";
import cards from "../cards.js";

export default function Deck() {

    return (
        <Container>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    number={index+1}
                    cardInfo={card}>
                </Card>
            ))}
        </Container>
    );
}

const Container = styled.div`
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 153px;
    margin-bottom: 100px;
    gap: 25px;
`;