'use-client';

// 🔌 Vendors
import React, { Fragment } from 'react';
import NextLink from 'next/link';

// 🔩 Components
import FullFrame from '@/ui/components/FullFrame';
import Link, { LinkProps } from '@/ui//components/Link';
import Page from '@/ui/components/Page';
import Text from '@/ui/components/Typography';
import Post, { PostProps } from '@/ui/components/Post';
import Photopgraph, { PhotographProps } from '@/ui/components/Photograph';
import Box from '@/ui/components/Box';
import Media from '@/ui/components/Media';
import { APP_NAME } from '@/lib/constants';
import Grid from '@/ui/components/Grid';
import Date from '@/ui/components/Date';
import { classNames } from '@/ui/utils/utils';
import styles from './Badge.module.scss';

// 🤖 Configs
import type { ElementTypes } from '@/ui/components/Typography';

export type PageLayoutType = React.ReactNode | React.ReactElement;

export const Badge = ({ children }: any) => {
  return (
    <Box as="span" paddingInlineEnd={`tight`} paddingBlockEnd={`tight`}>
      <div className={classNames(styles.badge)}>
        <Text element={'small'} variant="micro" color={'subdued'}>
          {children}
        </Text>
      </div>
    </Box>
  );
};

export interface PageLayoutProps {
  id: string;
  cover?: {
    headline?: string;
    subheadline?: string;
    lead?: {
      element: ElementTypes;
      string?: string;
      link?: LinkProps;
    };
  };
  heroPost?: PostProps | PhotographProps;
  content?: any;
  children?: React.ReactNode;
}

export const PageLayout = ({
  id,
  cover,
  heroPost,
  ...props
}: PageLayoutProps) => {
  return (
    <Page key={id} {...props}>
      <FullFrame>
        <Page.Cover greeting={cover?.headline} description={cover?.subheadline}>
          {cover?.lead && (
            <Text variant="lead" element={cover?.lead.element}>
              {cover?.lead.string}{' '}
              {cover?.lead.link && (
                <NextLink href={`${cover?.lead.link.url}`}>
                  <Link
                    primary={cover?.lead.link.primary === true ? true : false}
                  >
                    {cover?.lead.link.children}
                  </Link>
                </NextLink>
              )}
            </Text>
          )}
        </Page.Cover>
      </FullFrame>

      {heroPost && (
        <FullFrame>
          <Post id={heroPost.id}>
            <Post.Preview
              id={heroPost.id}
              variant={'hero'}
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              overview={heroPost.overview}
              emoji={heroPost.emoji}
              fill={heroPost.color}
              decoration={heroPost.decoration}
            />
          </Post>
        </FullFrame>
      )}
      {props.content?.work && (
        <Grid
          Cell={Grid.Cell}
          gap={`loose`}
          columns={{
            mobileSm: 1,
            mobileMd: 1,
            mobileLg: 1,
            tablet: 1,
            laptop: 3,
            laptopLg: 4,
            desktop: 4,
            desktopHD: 4,
            desktopTV: 4
          }}
          areas={{
            mobileSm: ['skills', 'resume'],
            mobileMd: ['skills', 'resume'],
            mobileLg: ['skills', 'resume'],
            tablet: ['skills', 'resume'],
            laptop: ['resume resume skills'],
            laptopLg: ['resume resume resume skills'],
            desktop: ['resume resume resume skills'],
            desktopHD: ['resume resume resume skills'],
            desktopTV: ['resume resume resume skills']
          }}
        >
          <Grid.Cell area="resume">
            <Box
              width="100%"
              paddingBlockEnd={`super-loose`}
              paddingInlineEnd={{ mobileSm: `none`, laptop: `super-loose` }}
            >
              <Text variant="headline-3" element="h3">
                Experience 🚀
              </Text>
              {props.content.work.map(
                (experience: {
                  device: any;
                  fill: string;
                  decoration: number;
                  startDate: string;
                  endDate: string;
                  company?: string;
                  website?: string;
                  position?: string;
                  summary?: string;
                  media?: string;
                  orientation?: string;
                  highlights: [] | any;
                }) => (
                  <Box
                    key={experience.company}
                    width="100%"
                    paddingBlock={`loose`}
                  >
                    <Text variant="caption" element="p" color="subdued" numeric>
                      <Date dateString={experience.startDate} /> to{' '}
                      {experience.endDate === 'Current' ? (
                        'Today'
                      ) : (
                        <Date dateString={experience.endDate} />
                      )}
                    </Text>
                    <Text variant="headline-4" element="h4">
                      {experience.position}
                    </Text>
                    <Text variant="lead" element="p">
                      {experience.company}
                    </Text>
                    <Text variant="caption" element="p" color="subdued">
                      <Link
                        monochrome
                        external
                        url={`${experience.website}`}
                        target="_blank"
                      >
                        {experience.website?.replace('http://', '')} 🌐
                      </Link>
                    </Text>
                    <Text variant="body" element="p">
                      {experience.summary}
                    </Text>

                    {experience.highlights && (
                      <Box width="100%">
                        {experience.highlights.map((highlight: string) => (
                          <Badge key={highlight}>{`✨ ${highlight}`}</Badge>
                        ))}
                      </Box>
                    )}
                    <hr />
                  </Box>
                )
              )}
            </Box>
          </Grid.Cell>

          <Grid.Cell area="skills">
            {props.content?.skills && (
              <Box width="100%" as="aside">
                <Text variant="headline-4" element="h4">
                  Skills & tools 🎒
                </Text>
                <Grid
                  Cell={Grid.Cell}
                  columns={{
                    mobileSm: 1,
                    mobileMd: 1,
                    mobileLg: 1,
                    tablet: 3,
                    laptop: 1,
                    laptopLg: 1
                  }}
                >
                  {props.content.skills.map(
                    (skill: {
                      name: string;
                      level: string;
                      keywords?: [] | any;
                    }) => (
                      <Grid.Cell key={skill.name}>
                        <Box width="100%">
                          <Text variant="body" element="p">
                            {skill.name}
                          </Text>
                          <Text variant="fine" element="p" color="subdued">
                            {skill.level} ⭐️
                          </Text>
                          {skill.keywords && (
                            <Box width="100%">
                              {skill.keywords.map((keyword: string) => (
                                <Badge key={keyword}>{`⚒️ ${keyword}`}</Badge>
                              ))}
                            </Box>
                          )}
                          <hr />
                        </Box>
                      </Grid.Cell>
                    )
                  )}
                </Grid>
              </Box>
            )}
          </Grid.Cell>
        </Grid>
      )}

      {props.content?.awards && (
        <FullFrame>
          <Box width="100%">
            <Text variant="headline-3" element="h3">
              Awards & Recognition 🏆
            </Text>
          </Box>
        </FullFrame>
      )}

      {props.content?.education && (
        <FullFrame>
          <Box width="100%">
            <Text variant="headline-3" element="h3">
              Education 🎓
            </Text>
            <Grid
              Cell={Grid.Cell}
              columns={{
                mobileSm: 1,
                mobileMd: 1,
                tablet: 2,
                laptop: 5,
                laptopLg: 7,
                desktop: 7,
                desktopHD: 7,
                desktopTV: 7
              }}
              areas={{
                mobileSm: ['map', 'info'],
                mobileMd: ['map', 'info'],
                mobileLg: ['info map'],
                laptop: ['map map info info info'],
                laptopLg: ['map map info info info info info'],
                desktop: ['map map info info info info info'],
                desktopHD: ['map map info info info info info'],
                desktopTV: ['map map info info info info info']
              }}
            >
              <Grid.Cell area="map">
                <Box
                  width="100%"
                  paddingBlockEnd={{
                    mobileSm: 'none',
                    laptopLg: `super-loose`
                  }}
                  paddingInlineEnd={{
                    mobileSm: 'none',
                    laptopLg: `super-loose`
                  }}
                >
                  <Media
                    id={`poster`}
                    fill={`green`}
                    source={`/poster.jpg`}
                    caption={APP_NAME}
                    decoration={3}
                    clipShape={`portrait`}
                    viewBox={`0 0 500 500`}
                  />
                </Box>
              </Grid.Cell>

              <Grid.Cell area="info">
                {props.content.education.map(
                  (school: {
                    startDate: string;
                    endDate: string;
                    institution?: string;
                    website?: string;
                    area?: string;
                    degree?: string;
                  }) => (
                    <Fragment key={school.institution}>
                      <Text variant="lead" element="p">
                        {school.institution}
                      </Text>
                      <Text variant="body" element="p">
                        <b>{school.area}</b>
                        <br />
                        <em>{school.degree}</em>
                      </Text>
                      <Text
                        variant="caption"
                        element="p"
                        color="subdued"
                        numeric
                      >
                        <Date dateString={school.startDate} /> to{' '}
                        <Date dateString={school.endDate} />
                      </Text>
                      <NextLink href={`${school.website}`}>
                        <Link monochrome external>
                          <small>
                            {school.website?.replace('http://', '')} 🌐
                          </small>
                        </Link>
                      </NextLink>
                    </Fragment>
                  )
                )}
              </Grid.Cell>
            </Grid>
          </Box>
        </FullFrame>
      )}
      {props.children}
    </Page>
  );
};

export default PageLayout;
