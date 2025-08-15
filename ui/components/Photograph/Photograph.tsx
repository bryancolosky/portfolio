'use client';

// 🔌 Vendors
import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

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
import styles from './Photograph.module.scss';

// 🤖 Configs
import { Article } from 'interfaces/index';
import { APP_NAME } from 'lib/constants';
import Page from '../Page';
import useSWR from 'swr';

export type PhotographType = React.ReactNode | React.ReactElement;

export interface PhotographProps extends Article {
  children?: React.ReactNode;
  unsplash?: any;
}
const useFetchUnsplash = async () => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  setStatus('loading');

  if (!process.env.UNSPLASH_ACCESS_KEY) {
    throw new Error('UNSPLASH_ACCESS_KEY missing');
  }

  const unsplashApi = createApi({
    accessKey: `${process.env.UNSPLASH_ACCESS_KEY}`
  });

  const unsplash = await unsplashApi.users
    .getPhotos({
      stats: false,
      page: 1,
      perPage: 7,
      username: `${APP_NAME.replaceAll(' ', '').toLowerCase()}`
    })
    .then((result) => result.response);

  return {
    props: { status, data }
  };
};

export function Photo({ src }: any) {
  return (
    <article className="photo">
      <h4>{src.title}</h4>
      <p>{src.opening_crawl}</p>
    </article>
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Photograph = ({
  children,
  unsplash
}: PhotographProps & {
  CoverSheet?: typeof CoverSheet;
  Header?: typeof Header;
  Meta?: typeof Meta;
  Preview?: typeof Preview;
  Slug?: typeof Slug;
  Timestamp?: typeof Timestamp;
  Title?: typeof Title;
}): PhotographType => {
  const { data, error, isLoading } = useSWR('/api/photography', fetcher);

  if (error) return <Page />;
  if (isLoading) return <Page loading />;
  if (!data) return null;

  const meta = data[0];
  const page = data;
  const [uids] = Object.keys(unsplash).map((photo) => unsplash[photo]);

  return (
    <div className={`${styles.photograph}`}>
      {uids.map((photo: { urls: any; id: any }) => {
        return <Photo key={photo.id} src={photo.urls.full} />;
      })}
    </div>
  );
};

Photograph.CoverSheet = CoverSheet;
Photograph.Header = Header;
Photograph.Meta = Meta;
Photograph.Preview = Preview;
Photograph.Slug = Slug;
Photograph.Timestamp = Timestamp;
Photograph.Title = Title;

export default Photograph;
