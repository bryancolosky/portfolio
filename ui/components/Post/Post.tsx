// 🔌 Vendors
import React from 'react';

// 🔩 Components
import {
  CoverSheet,
  Header,
  Meta,
  Preview,
  Slug,
  Timestamp,
  Title
} from './elements';

// 🎨 Styles
import styles from './Post.module.scss';

// 🔩 Config
import { Article } from '../../../interfaces';

export type PostType = React.ReactNode | React.ReactElement;

export interface PostProps extends Article {
  children: React.ReactNode;
}

const Post = ({
  children,
  ...props
}: PostProps & {
  CoverSheet?: typeof CoverSheet;
  Header?: typeof Header;
  Meta?: typeof Meta;
  Preview?: typeof Preview;
  Slug?: typeof Slug;
  Timestamp?: typeof Timestamp;
  Title?: typeof Title;
}): PostType => {
  return children;
};

Post.CoverSheet = CoverSheet;
Post.Header = Header;
Post.Meta = Meta;
Post.Preview = Preview;
Post.Slug = Slug;
Post.Timestamp = Timestamp;
Post.Title = Title;

export default Post;
