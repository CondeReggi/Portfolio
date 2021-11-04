import styled from "styled-components";

export const AboutComponent = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #48186c;
    color: #ebc88b;
`;

export const TitleAbout = styled.div`
    width: 100%;
    max-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: end;
    padding 0 25px;
`;

export const DescriptionAboutMe = styled.div`
    width: 100%;
    padding 5px 100px;
    background-color: #48156c;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px){
        padding 5px 0px;
    }
`;

export const PresentationAboutMe = styled.div`
    width: 50%;
    padding-left: 12px;

    @media screen and (max-width: 1000px){
        margin-top 50px;
        padding-left: 0px;
    }
`;

export const ContainerTecnologies = styled.div`
    width: 100%;
    padding: 0 100px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 100px
`;

export const TeconlogiesLogo = styled.img`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    margin: 10px;
    transition: 0.11s ease-in;
    cursor: pointer;

    &:hover{
        transform: scale(120%);
        filter: invert(100%);
    }
`;

export const ContainerFlexColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;