import type Author from "./author";

interface PhotographType {
  id: string;
  slug?: string;
  name?: string;
  title?: string;
  date?: string;
  coverImage?: string;
  color?: string;
  decoration?: number;
  author?: Author;
  excerpt?: string;
  orientation?: string;
  ogImage?: {
    url?: string;
  };
  content?: React.ReactNode;
}

export default PhotographType;
