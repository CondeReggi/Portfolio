import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.407);
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0; 
    right: 0, 
    bottom: 0; 
    top: 0;
    z-index: 99999999;
`;

export const ModalDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ModalPage = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 500px;
    height: 350px;
    flex-direction: column;
    background-color: #49426c;
    position: relative;
    z-index: 99999;
    border-radius: 30px;
    transition: 2s ease-in;
    box-shadow: 3px 4px rgba(0, 0, 0, 0.2);
    color: #ac97e5;
`;