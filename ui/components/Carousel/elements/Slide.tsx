'use client';

// 🔌 Vendors

// 🔩 Components
import Post, { Variants as PostVariant } from '@/ui/components/Post';
import Photograph, {
  Variants as PhotographVariant
} from '@/ui/components/Photograph';

// 🤖 Configs

// 🎨 Styles
import styles from './Slide.module.scss';

//  🔩 Config
import type PostProps from 'interfaces/post';
import type PhotographProps from 'interfaces/photograph';
import { UnsplashPhotograph, Article, Content } from 'interfaces/index';

export type SlideType = React.ReactNode | null;
export type SlideVariants = 'post' | 'photograph';

export interface SlideProps
  extends Article,
    Content,
    PostProps,
    PhotographProps,
    UnsplashPhotograph {
  type?: SlideVariants;
  variant?: PostVariant | PhotographVariant;
}

export const Slide = ({ type, ...props }: SlideProps): SlideType => {
  switch (type) {
    case 'photograph':
      return (
        <div
          key={props.slug}
          style={{
            display: 'flex',
            width: '100%'
          }}
        >
          <Photograph {...props}>
            <Photograph.Preview
              emoji={props.emoji}
              id={props.id}
              variant={props.variant}
              title={props.title}
              coverImage={props.coverImage || props.unsplash?.urls.full}
              date={props.date}
              author={props.author}
              slug={props.slug}
              overview={props.overview}
              fill={props.color}
              decoration={props.decoration}
            />
          </Photograph>
        </div>
      );
    case 'post':
      return (
        <div
          key={props.slug}
          style={{
            display: 'flex',
            width: '80%',
            padding: '0 2rem'
          }}
        >
          <Post {...props}>
            <Post.Preview
              id={props.id}
              variant={props.variant}
              title={props.title}
              coverImage={props.coverImage}
              date={props.date}
              author={props.author}
              slug={props.slug}
              overview={props.overview}
              emoji={props.emoji}
              fill={props.color}
              decoration={props.decoration}
            />
          </Post>
        </div>
      );
    default:
      return null;
  }
};

export default Slide;
