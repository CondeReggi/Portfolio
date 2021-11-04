import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'} //0 8px 32px 0 rgb(79 81 100 / 37%)

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#ebc88b' : '#fff'};
    text-transform: uppercase;
    padding: 0.5rem 1.5rem;
`;

export const NavbarContainer = styled.div`  
    transition: all 1s ease;
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 50;
    background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#49426c' : '#281e1e'} ;
    box-shadow: ${ () => useSelector((store) => store.darkmodeReducer.value) ? ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )' : '0 8px 32px 0 rgb(79 81 100 / 37%)'} ;

    @media screen and ( max-width: 960px ){
        padding: 0 20px
    }
`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
`;

export const IconLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#ebc88b' : '#fff'} ;
`;

export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 60px;
        left: ${({click}) => click ? 0 : "-100%"};
        flex-direction: column;
        transition: 0.5s all ease-in;
        background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#49426c' : '#281e1e'} ;
        z-index: 9999;
    }
`;

export const MenuItems = styled.li`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 400;

    &:hover{
        background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#343257' : '#3c2e2e'} ;
        border-bottom: 0.3rem solid ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#ebc88b' : '#fff'} ;
        transition: 0.2s ease-in
    }

    @media screen and (max-width: 960px){
        width: 100%;
        height: 60px;
    }
`;

export const IconLogoMobile = styled.div`
    display: none;
    
    @media screen and (max-width: 968px){
        display:flex;
        color:  ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#ebc88b' : '#fff'} ;
        font-size: 2rem;
    }
`;

export const DarkLightDiv = styled.div`
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 65px;
    right: 0;
    z-index: 9;
    padding: 4px 20px 4px 4px;
    font-size: 2rem;
    color: white;
    background-color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#49426c' : '#281e1e'} ;
    border-radius: 30px 0 0 30px;
    cursor: pointer; 
    box-shadow: ${ () => useSelector((store) => store.darkmodeReducer.value) ? ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )' : '0 8px 32px 0 rgb(79 81 100 / 37%)'} ;   
`;