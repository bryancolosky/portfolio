'use client';

// 🔌 Vendors
import { Fragment, useEffect, useRef } from 'react';

// 🔩 Components
import Text from '@/ui/components/Typography';
import Slide, { SlideProps } from './elements';

// 🤖 Configs
import { UnsplashPhotograph } from 'interfaces/index';
import type PostType from 'interfaces/post';
import type PhotographType from 'interfaces/photograph';

// 🎨 Styles
import styles from './Carousel.module.scss';

export type CarouselType = React.ReactNode;
export interface CarouselProps extends SlideProps, UnsplashPhotograph {
  slides: PostType[] | PhotographType[] | [];
  name?: string;
}
export const Carousel = ({
  slides,
  name,
  type = 'post',
  ...props
}: CarouselProps): CarouselType => {
  useEffect(() => {
    initFlickity();
  });
  const carousel = useRef(null);
  async function initFlickity() {
    if (typeof window !== 'undefined' && carousel.current) {
      const Flickity = (await import('flickity')).default;
      new Flickity(carousel.current, {
        wrapAround: true,
        autoPlay: false,
        selectedAttraction: 0.5,
        friction: 1,
        freeScroll: true,
        freeScrollFriction: 0.5,
        cellAlign: 'center',
        groupCells: 1,
        draggable: false
      });
    }
  }

  return (
    <Fragment>
      {name && <Text element="h3" variant="headline-3">{`${name}`}</Text>}
      <div
        className={styles.carousel}
        ref={carousel}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          width: '100%'
        }}
      >
        {slides.map((slide) => {
          const { ...props } = slide;
          return (
            <Slide
              key={slide.id}
              type={type}
              variant={`hero`}
              title={slide.title}
              coverImage={slide.coverImage}
              date={slide.date}
              author={slide.author}
              slug={slide.slug}
              color={slide.color}
              decoration={slide.decoration}
              {...props}
            />
          );
        })}
      </div>
    </Fragment>
  );
};
export default Carousel;
