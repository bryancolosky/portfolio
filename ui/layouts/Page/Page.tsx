'use-client';

// 🔌 Vendors
import React, { Fragment } from 'react';
import NextLink from 'next/link';

// 🔩 Components
import FullFrame from '@/ui/components/FullFrame';
import Link, { LinkProps } from '@/ui//components/Link';
import Page, { type PageProps as PageType } from '@/ui/components/Page';
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
import { Page as PageProps } from '@/lib/pages';

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

export interface PageLayoutProps extends PageProps, PageType {}

export const PageLayout = ({ loading, ...props }: PageLayoutProps) => {
  return (
    <Page key={props.id} {...props} loading={loading}>
      <Page.Cover
        greeting={props.cover?.headline}
        description={props.cover?.subheadline}
      >
        {props.cover?.lead && (
          <Text variant="lead" element={props.cover?.lead && 'p'}>
            {props.cover?.lead.string}{' '}
            {props.cover?.lead.link && (
              <NextLink href={`${props.cover?.lead.link.url}`}>
                <Link
                  primary={
                    props.cover?.lead.link.primary === true ? true : false
                  }
                >
                  {props.cover?.lead.link.label}
                </Link>
              </NextLink>
            )}
          </Text>
        )}
      </Page.Cover>

      {props.heroPost && (
        <FullFrame>
          <Post id={props.heroPost.id}>
            <Post.Preview
              id={props.heroPost.id}
              variant={'hero'}
              title={props.heroPost.title}
              coverImage={props.heroPost.coverImage}
              date={props.heroPost.date}
              author={props.heroPost.author}
              slug={props.heroPost.slug}
              overview={props.heroPost.overview}
              emoji={props.heroPost.emoji}
              fill={props.heroPost.color}
              decoration={props.heroPost.decoration}
            />
          </Post>
        </FullFrame>
      )}
      {props.resume?.workExperience && (
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
              {props.resume?.workExperience.map((experience) => (
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
              ))}
            </Box>
          </Grid.Cell>

          <Grid.Cell area="skills">
            {props.resume?.skills && (
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
                  {props.resume.skills.map((skill) => (
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
                  ))}
                </Grid>
              </Box>
            )}
          </Grid.Cell>
        </Grid>
      )}

      {props.resume?.awards && (
        <FullFrame>
          <Box width="100%">
            <Text variant="headline-3" element="h3">
              Awards & Recognition 🏆
            </Text>
          </Box>
        </FullFrame>
      )}

      {props.resume?.education && (
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
                {props.resume.education.map(
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
