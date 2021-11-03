import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    position: fixed;
    top: 0;
    z-index: 50;
    background-color: #49426c;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );

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
    color: #ebc88b;
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
        background-color: #49426c;
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
        background-color: #343257;
        border-bottom: 0.3rem solid #ebc88b;
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
        color: #343257;
        font-size: 2rem;
    }
`;
