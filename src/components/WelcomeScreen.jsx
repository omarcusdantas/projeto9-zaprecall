import styled from "styled-components";
import logo from "../assets/logo.png";

export default function WelcomeScreen({ handleClick }) {
    return (
        <Container>
            <img src={logo} alt="ZapRecall" />
            <h1>ZapRecall</h1>
            <button onClick={handleClick} data-test="start-btn">
                Iniciar Recall!
            </button>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 136px;
    }

    h1 {
        color: #ffffff;
        font-family: "Righteous", sans-serif;
        font-weight: 400;
        font-size: 36px;
        margin: 30px 0 40px 0;
    }

    button {
        background-color: #ffffff;
        color: #d70900;
        font-family: "Recursive";
        font-size: 18px;
        font-weight: 400;
        width: 246px;
        height: 54px;
        border: 1px solid #d70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        cursor: pointer;
    }
`;
