import PostType from './post';
import PhotographType from './photograph';
import { VeryBasic } from 'unsplash-js/dist/methods/photos/types';

export interface SiteMetaData {
  url: string;
  title: string;
  author?: string;
  description?: string;
  overview?: string;
}

export interface Content {
  id: string;
  title?: string;
  emoji?: string;
  children?: React.ReactNode;
}

export interface Project {
  slug: string;
  content?: React.ReactNode;
}

export interface Article extends PostType, Content {
  id: string;
  title?: string;
  year?: string;
}

export interface UnsplashPhotograph extends PhotographType {
  uid?: string;
  slug?: string;
  unsplash?: VeryBasic;
}

export interface Shape {
  id: string;
  path: string;
  fill: string;
}

export interface ResponseError extends Error {
  status: number | unknown;
  message: string;
}
