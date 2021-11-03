import React from 'react'
import Lottie from 'react-lottie-player'
import lottieJson from '../../Lotties/65230-circle.json'
import { ButtonStart, HomeComponent, HomeTitle , ContainerDescriptionHome} from './Home.elements';
import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();

    function handleClick() {
        history.push("/about");
    }

    return (
        <>
            <HomeComponent>
                <ContainerDescriptionHome>
                    <HomeTitle>
                        WELCOME <br/>I´m Lucas Conde
                    </HomeTitle>
                    <ButtonStart onClick={ () => handleClick() }>
                        LETS START
                    </ButtonStart>
                </ContainerDescriptionHome>
                <Lottie
                    loop
                    animationData={lottieJson}
                    play
                    style={{ width: 450, height: 450 }}
                />
            </HomeComponent>
        </>
    )
}

export default Home
