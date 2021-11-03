import React, { useState } from 'react'
import { FaChevronRight , FaChevronLeft } from "react-icons/fa";
import { myProyects } from '../../Data';
import styles from './ImagesSlider.module.css'

const ImagesSlider = ({ data }) => {

    //console.log(data)

    const [current, setCurrent] = useState(0);
    const lenght = data;

    //console.log(lenght)

    const nextSlide = () => setCurrent((current ===  lenght - 1) ? 0 : current + 1)
    const prevSlide = () => setCurrent(current === 0 ? lenght - 1 : current - 1)

    if( !Array.isArray(myProyects) || myProyects.lenght <= 0 ) return null;

    //console.log(current)

    return (
        <section className={styles.slider}>
            <FaChevronLeft onClick={prevSlide} className={styles.left_arrow}/>
            <FaChevronRight onClick={nextSlide} className={styles.right_arrow}/>
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
        </section>
    )
}

export default ImagesSlider
