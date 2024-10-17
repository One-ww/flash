import classNames from "classnames";
import React, { useState } from "react";

import styles from "./index.scss";

const ThreeDimensionalSwiper: React.FC = () => {
  const [index, setIndex] = useState(3);
  const offsetStep = 100;
  const scaleStep = 0.6;
  const opacityStep = 0.5;

  const layout = () => {
    // 假设这里你有一个数组存储所有的图片数据，例如 images
    const images = [
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/bob-ross-1.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/bob-ross-2.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/bob-ross-3.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/bob-ross-4.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/bob-ross-5.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/bob-ross-6.jpg",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/168886/bob-ross-7.jpg",
    ];

    return images.map((imageSrc, i) => {
      const dis = Math.abs(i - index);
      const sign = Math.sign(i - index);
      // transform
      // translateX
      let xOffset = (i - index) * offsetStep;
      if (i !== index) {
        xOffset = xOffset + 100 * sign;
      }
      // scale
      const scale = scaleStep ** dis;
      // rotateY
      const rotateY = 45 * -sign;
      // opacity
      const opacity = opacityStep ** dis;
      // z-index
      const zIndex = images.length - dis;

      return (
        <img
          key={i}
          className={styles.carouselItem}
          src={imageSrc}
          style={{
            transform: `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`,
            opacity,
            zIndex,
          }}
        />
      );
    });
  };

  const handlePrevClick = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return 0;
      }
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex > 6) {
        return 6;
      }
      return newIndex;
    });
  };

  return (
    <div className={styles.threeDimensionalSwiperContainer}>
      <div className={styles.carousel}>
        <div className={styles.carouselList}>{layout()}</div>
        <div
          className={classNames(styles.indicator, styles.prev)}
          onClick={handlePrevClick}
        >
          ❮
        </div>
        <div
          className={classNames(styles.indicator, styles.next)}
          onClick={handleNextClick}
        >
          ❯
        </div>
      </div>
    </div>
  );
};

export default ThreeDimensionalSwiper;
