import styled from 'styled-components'
import { useSelector } from "react-redux";

//${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'} //0 8px 32px 0 rgb(79 81 100 / 37%)
   
export const SliderContent = styled.section`
    position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    overflow: hidden;
    color: ${ () => useSelector((store) => store.darkmodeReducer.value) ? '#ebc88b' : '#fff'};  
`;