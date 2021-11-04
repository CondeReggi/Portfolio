import React, { useState } from 'react'
import { FaChevronRight , FaChevronLeft } from "react-icons/fa";
import { myProyects } from '../../Data';
import { SliderContent } from './imagesSlider.elements';
import styles from './ImagesSlider.module.css'

const ImagesSlider = ({ data }) => {
    const [current, setCurrent] = useState(0);
    const lenght = data;

    const nextSlide = () => setCurrent((current ===  lenght - 1) ? 0 : current + 1)
    const prevSlide = () => setCurrent(current === 0 ? lenght - 1 : current - 1)

    if( !Array.isArray(myProyects) || myProyects.lenght <= 0 ) return null;

    return (
        <SliderContent>
            <FaChevronLeft onClick={prevSlide} style={{ color: 'inherit'}} className={styles.left_arrow}/>
            <FaChevronRight onClick={nextSlide} style={{ color: 'inherit'}} className={styles.right_arrow}/>
            {
                myProyects.map( (slide, index) => {
                    return (
                        <div className={ index === current ? styles.slide_active : styles.slide } key={index}>
                            <div className={styles.divcontainerImage}>
                                { index === current && (<img src={slide.img} alt={slide.name ? slide.name : slide.description} className={styles.image_slide}/>)}
                            </div>
                            <div className={styles.divDescription}>
                                <h3 style={{paddingBottom: 10}}>{slide.name}</h3>
                                <p className={styles.descriptionProyect}>{slide.description}</p>
                                <a target='_blank' rel='noopener noreferrer' className={styles.goLink} href={slide.link}>Code here!</a>
                            </div>
                        </div>
                    )
                })
            }
        </SliderContent>
    )
}

export default ImagesSlider
