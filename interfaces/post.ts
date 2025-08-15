import { Content } from 'interfaces/index';
import type Author from './author';

interface PostType extends Content {
  id: string;
  slug?: string;
  title?: string;
  date?: string;
  coverImage?: string;
  author?: Author;
  overview?: string;
  challenge?: string;
  solution?: string;
  color?: string;
  decoration?: number;
  ogImage?: {
    url?: string;
  };
  content?: React.ReactNode;
}

export default PostType;
