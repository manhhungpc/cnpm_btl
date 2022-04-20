import React from "react";
import styles from "../styles/Slider.module.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <img src={imageSrc} alt="Pic1" className={styles.slider__image} />
          <div className={styles.slider__content}>
            <h1 className={styles.slider__title}>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.slider__content}>
            <h1 className={styles.slider__title}>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <img src={imageSrc} alt="Pic2" className={styles.slider__image} />
        </>
      );
    }
  };

  return (
    <div className={ styles.slider + ' ' + ( inView ? styles.slider__zoom : '' ) } ref={ref}>
      {renderContent()}
    </div>
  );
};

export default Slider;