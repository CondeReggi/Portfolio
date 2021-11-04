import React from 'react'
import { useDispatch } from "react-redux";
import { toggleMode } from "../../redux/actions/toggleAction";
import { CgDarkMode } from "react-icons/cg";
import { DarkLightDiv } from '../Navbar/Navbar.elements';

//${ () => useSelector((store) => store.darkmodeReducer.value) ? '#48156c' : 'rgb(44 42 42)'} //0 8px 32px 0 rgb(79 81 100 / 37%)

const Buttonmode = () => {
    const dispatch = useDispatch(); //creo el despacho
    return (
        <DarkLightDiv>
            <CgDarkMode onClick={() => dispatch(toggleMode())}/>
        </DarkLightDiv>
        
    )
}

export default Buttonmode
