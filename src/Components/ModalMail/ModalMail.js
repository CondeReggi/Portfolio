import React , { useEffect } from 'react'
import { ModalContainer, ModalDescription, ModalPage } from './ModalMail.elements'
import Lottie from 'react-lottie-player'
import lottieJson from '../../Lotties/67000-checkmark.json'
import { useDispatch } from "react-redux";
import { toggleValue } from "../../redux/actions/toggleAction";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalMail = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

    }, [])

    return (
        <>
            <ModalContainer >
                <ModalPage>
                    <AiFillCloseCircle className='Closebutton' onClick={() => {dispatch(toggleValue())}} />
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{ width: 150, height: 150 }}
                    />
                    <ModalDescription>
                        <h2>Thanks for send</h2>
                        <p>The mail has been sent succesfully</p>
                    </ModalDescription>
                </ModalPage>
            </ModalContainer>
        </>
    )
}

export default ModalMail
