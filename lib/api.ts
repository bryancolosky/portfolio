import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { Page, pages } from './pages';

const postsDirectory = join(process.cwd(), '_posts');
const photographsDirectory = join(process.cwd(), '_photographs');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPhotographSlugs() {
  return fs.readdirSync(photographsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.toLowerCase().replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPhotographBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.toLowerCase().replace(/\.md$/, '');
  const fullPath = join(photographsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by name? in descending order
    .sort((post1, post2) => (post1.emoji > post2.emoji ? -1 : 1));
  return posts;
}

export function getAllPhotographs(fields: string[] = []) {
  const slugs = getPhotographSlugs();
  const photos = slugs
    .map((slug) => getPhotographBySlug(slug, fields))
    // sort photos by date in descending order
    .sort((photo1, photo2) => (photo1.date > photo2.date ? -1 : 1));
  return photos;
}
