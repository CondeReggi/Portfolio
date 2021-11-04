import styled from 'styled-components';
import { useSelector } from "react-redux";

//${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'} /

export const ButtonSubmit = styled.input`
    width: 100px; 
    padding: 10px 15px;
    border-radius: 30px;
    border:none;
    cursor: pointer;
    background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? 'rgb(89, 127, 197)' : '#48156c'} ;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;

    &:hover{
        background-color: rgb(71, 114, 194);
    }
`;

export const ContainerForm = styled.div`
    transition: all 1s ease;
    margin-top: 60px;
    min-height: 100vh;
    background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'};
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#ebc88b' : '#fff'} ;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    padding-top: 20px;
`;

export const DescriptionForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#49426c8d' : '#281e1e8d'};
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