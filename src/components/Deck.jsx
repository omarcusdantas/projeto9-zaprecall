import React from "react";
import styled from "styled-components";
import Card from "./Card.jsx";

export default function Deck() {

    return (
        <Container>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
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