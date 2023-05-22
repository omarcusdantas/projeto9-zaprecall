import styled from "styled-components";
import Card from "./Card.jsx";

export default function Deck({ handleClick, cards }) {
    return (
        <Container>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    number={index + 1}
                    handleClick={handleClick}
                    cardInfo={card}></Card>
            ))}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    margin: 153px 0 100px 0;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;
