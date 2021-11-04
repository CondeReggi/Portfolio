import React from 'react'
import { HomeTitle } from '../Home/Home.elements'
import { AboutComponent, ContainerFlexColumn, ContainerTecnologies, DescriptionAboutMe , PresentationAboutMe, TeconlogiesLogo } from './About.elements'
import Lottie from 'react-lottie-player'
import lottiePerson from '../../Lotties/67253-person-working-creative.json'
import { TechnologiesData } from '../../Data'

const About = () => {
    const imagenes = TechnologiesData
    const OpenPage = (page) => window.open(page)

    return (
        <AboutComponent>
            <DescriptionAboutMe>
                <PresentationAboutMe>
                    <HomeTitle>
                        ABOUT ME!
                    </HomeTitle>
                    <h2 style={{marginBottom: 50 , marginTop: 10}}>I´m a Front End Developer Junior from Montevideo, Uruguay.</h2>
                    <p>I like to craft solid and scalable frontend products with great users interfaces. <br/>
                        I´m student of University of Engineering from Uruguay (UDELAR) and took several courses on different technologies
                    </p>
                </PresentationAboutMe>
                <Lottie
                    loop
                    animationData={lottiePerson}
                    play
                    style={{ width: 500, height: 500 }}
                />
            </DescriptionAboutMe>
            <ContainerFlexColumn>
                <HomeTitle style={{ paddingBottom: 30 }}>Technologies!</HomeTitle>
                <ContainerTecnologies>
                    {
                        imagenes.map((image, index) => <TeconlogiesLogo src={image.img} key={index} alt={image.name} onClick={ () => OpenPage(image.pagina) } />)
                    }
                </ContainerTecnologies>
            </ContainerFlexColumn>
        </AboutComponent>
    )
}

export default About
