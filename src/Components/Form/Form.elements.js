import styled from 'styled-components';

export const ContainerForm = styled.div`
    margin-top: 60px;
    min-height: 100vh;
    background-color: #48186c;
    width: 100%;
    display: flex;
    justify-content: center;
    color: #ebc88b;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export const DescriptionForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #49426c8d;;
    height: 300px;
    margin-top: 50px;
    border-radius: 8px;
    margin-bottom: 50px;
    width: 600px;

    @media screen and (max-width: 600px){
        flex-direction: column;
        height: auto;
        width: auto;
    }
`;

export const SocialDescription = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px
`;

export const ContactMeAnimation = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 110px;
    margin-top: 40px;
`;

export const Cube = styled.div`
    width: 50px;
    height: 50px;
    position: relative;
`;

export const ObjetPContact = styled.p`
    position: absolute;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 3px;
    top: -35px;
    left: -50px;

    @media screen and (max-width: 600px){
        font-size: 2.7rem;
    }
`;

export const ListSocial = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: center;
    margin-top: 15px;
`;

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;