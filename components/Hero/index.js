import React, {
  useRef,
  useEffect,
  useState,
} from 'react';
import PropType, {
  shape,
  object,
  string,
  number,
} from 'prop-types';

const heroHeights = {
  mobile: 220,
  tablet: 440,
  desktop: 520,
};

let timer;

function Hero(props) {
  const {
    imageSrc,
    altText,
  } = props;

  const sectionRef = useRef(null);

  const [innerWidth, setInnerWidth] = useState(992);
  const [innerHeight, setInnerHeight] = useState(300);

  const getHeroWidth = () => {
    const {
      current,
    } = sectionRef;

    const {
      width: componentWidth,
    } = current?.getBoundingClientRect();

    setInnerWidth(componentWidth);
  };

  const getHeroHeight = () => {
    const isMobile = innerWidth < 768;
    const isTablet = (innerWidth < 992) && (innerWidth >= 768);
    const isDesktop = innerWidth >= 992;

    if (isMobile) {
      setInnerHeight(heroHeights.mobile);
    }

    if (isTablet) {
      setInnerHeight(heroHeights.tablet);
    }

    if (isDesktop) {
      setInnerHeight(heroHeights.desktop);
    }
  };

  const resizeListener = () => {
    if (timer !== null) {
      cancelAnimationFrame(timer);
    }

    timer = requestAnimationFrame(() => {
      getHeroHeight();
      getHeroWidth();
    });
  };

  // listener for resize
  useEffect(() => {
    getHeroWidth();
    getHeroHeight();

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, []);

  return (
    <section ref={sectionRef}>
      <img
        width={innerWidth}
        height={innerHeight}
        alt={altText}
        src={imageSrc}
      />
    </section>
  );
}

Hero.propTypes = {
  imageSrc: string.isRequired,
  altText: string.isRequired,
};

export default Hero;