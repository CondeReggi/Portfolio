import React from 'react'
import Lottie from 'react-lottie-player'
import { myProyects } from '../../Data'
import lottieJson from '../../Lotties/80703-data-in-move.json'
import ImagesSlider from '../Slider/ImagesSlider'
import { DescriptionProyect , PoryectDescription, ProyectContainer } from './Proyects.elements'

const Proyects = () => {

    const resolutionWitdh = window.screen.width;
    const fourHundred = (resolutionWitdh/2 - 10);
    const resolutionLottie = ((resolutionWitdh < 450) ? fourHundred : 200);

    console.log()

    return (
        <ProyectContainer>
            <PoryectDescription>
                <DescriptionProyect>
                    <h2 style={{paddingBottom: 10}}>Hi there!, These are my Proyects!</h2>
                    <p>In this section, I will leave the different projects<br/>that I have been doing this last time.</p>
                </DescriptionProyect>
                <div style={{width: '50%'}}>
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                        style={{ width: resolutionLottie , height: resolutionLottie }}
                    />
                </div>
            </PoryectDescription>
            <ImagesSlider data={myProyects.length} />
        </ProyectContainer>
    )
}

export default Proyects
