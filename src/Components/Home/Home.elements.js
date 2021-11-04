import styled from "styled-components";
import { useSelector } from "react-redux";

//${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'} //0 8px 32px 0 rgb(79 81 100 / 37%)

export const HomeComponent = styled.div`
    transition: all 1s ease;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: end;
    background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'} ;
    color: #fff;
    overflow: hidden;
    min-height: 100vh;

    @media screen and (max-width: 740px){
        flex-direction: column;
        height: auto;
        margin-top: 30px;
    }
`;

export const ContainerDescriptionHome = styled.div`
    padding-top: 80px;
`;

export const HomeTitle = styled.h1`
    font-size: 2rem;
    max-width: 300px
`;

export const ButtonStart = styled.button`
    display: block;
    position: relative;
    margin: 0.5em 0;
    padding: .8em 2.2em;
    cursor: pointer;

    background: #FFFFFF;
    border: none;
    border-radius: .4em;

    text-transform: uppercase;
    font-size: 1.4em;
    font-family: "Work Sans", sans-serif;
    font-weight: bold;
    letter-spacing: 0.04em;

    mix-blend-mode: color-dodge;
    perspective: 500px;
    transform-style: preserve-3d;

    &:before, &:after {
        --z: 0px;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        opacity: 0;
        mix-blend-mode: inherit;
        border-radius: inherit;
        transform-style: preserve-3d;
        transform: translate3d(
            calc(var(--z) * 0px), 
            calc(var(--z) * 0px), 
            calc(var(--z) * 0px)
        );
    }

    span {
        mix-blend-mode: none;
        display: block;
    }

    &:after {
        background-color: #5D00FF;
    }

    &:before {
        background-color: #FF1731;
    }

    &:hover {
        background-color: #FFF65B;
        transition: background .3s 0.1s;
    }

    &:hover:before {
        --z: 0.04;
        animation: translateWobble 2.2s ease forwards;
    }

    &:hover:after {
        --z: -0.06;
        animation: translateWobble 2.2s ease forwards;
    }
    }

    @keyframes rotateAngle {
    0% {
        transform: rotateY(0deg) rotateX(10deg);
        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    }
    25% {
        transform: rotateY(20deg) rotateX(10deg);
    }
    50% {
        transform: rotateY(0deg) rotateX(10deg);
        animation-timing-function: cubic-bezier(0.61, 1, 0.88, 1);
    }
    75% {
        transform: rotateY(-20deg) rotateX(10deg);
    }
    100% {
        transform: rotateY(0deg) rotateX(10deg);
    }
    }

    @keyframes translateWobble {
    0% {
        opacity: 0;
        transform: translate3d(
            calc(var(--z) * 0px), 
            calc(var(--z) * 0px), 
            calc(var(--z) * 0px)
        );
    }
    16% {
        transform: translate3d(
            calc(var(--z) * 160px), 
            calc(var(--z) * 160px), 
            calc(var(--z) * 160px)
        );
    }
    28% {
        opacity: 1;
        transform: translate3d(
            calc(var(--z) * 70px), 
            calc(var(--z) * 70px), 
            calc(var(--z) * 70px)
        );
    }
    44% {
        transform: translate3d(
            calc(var(--z) * 130px), 
            calc(var(--z) * 130px), 
            calc(var(--z) * 130px)
        );
    }
    59% {
        transform: translate3d(
            calc(var(--z) * 85px), 
            calc(var(--z) * 85px), 
            calc(var(--z) * 85px)
        );
    }
    73% {
        transform: translate3d(
            calc(var(--z) * 110px), 
            calc(var(--z) * 110px), 
            calc(var(--z) * 110px)
        );
    }
    88% {
        opacity: 1;
        transform: translate3d(
            calc(var(--z) * 90px), 
            calc(var(--z) * 90px), 
            calc(var(--z) * 90px)
        );
    }
    100% {
        opacity: 1;
        transform: translate3d(
            calc(var(--z) * 100px), 
            calc(var(--z) * 100px), 
            calc(var(--z) * 100px)
        );
    }
`;

