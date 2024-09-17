/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styles  from './styles.module.css'
 
const Slider = ({children,step = 150}) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= step
    }
    const scrollRight = () => {
        sliderRef.current.scrollLeft += step
    }

    return (
        <div className={styles.slider}>
            <button onClick={scrollLeft} className={styles.arrow} >{'<'}</button>
            {/* для того чтобы не ломать структуру и логику дочернего элемента прокидывает в пропс реф с помощью этог метода */}
            {React.cloneElement(children,{ref:sliderRef})}
            <button onClick={scrollRight} className={styles.arrow} >{'>'}</button>
        </div>
    );
};

export default Slider;