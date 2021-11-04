import styled from 'styled-components'
import { useSelector } from "react-redux";

//${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'} //0 8px 32px 0 rgb(79 81 100 / 37%)

export const ProyectContainer = styled.div`
    transition: all 1s ease;
    width: 100%;
    background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'};
    padding: 20px 100px 0 100px;
    color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#ebc88b' : '#fff'};  
    min-height: 100vh;
    margin-top: 60px; 

    @media screen and (max-width: 650px){
        padding: 0;
    }
`;

export const PoryectDescription = styled.div`
    display: grid;
    grid-template-columns: 55% 1fr;
    height: auto;
    justify-content: center;
    align-items: center;
    padding: 25px 20px 0 20px;
    overflow: hidden;

    @media screen and (max-width: 900px){
        margin-bottom: 20px;
    } 
`;

export const DescriptionProyect = styled.div`
    width: 100%;
    text-align: end;
`;
