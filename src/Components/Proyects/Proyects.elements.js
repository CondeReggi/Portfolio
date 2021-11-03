import styled from 'styled-components'

export const ProyectContainer = styled.div`
    width: 100%;
    background-color: #48186c;
    padding: 20px 100px 0 100px;
    color: #ebc88b;  
    min-height: 100vh;
    margin-top: 30px; 

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
