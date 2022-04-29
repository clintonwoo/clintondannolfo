import * as HelloWorldPost from "../../pages/blog/hello-world.mdx";

enum Month {
  JAN = 0,
  FEB = 1,
  MAR = 2,
  APR = 3,
  MAY = 4,
  JUN = 5,
  JUL = 6,
  AUG = 7,
  SEP = 8,
  OCT = 9,
  NOV = 10,
  DEC = 11,
}

export interface IBlogPostMeta {
  description: string;
  nextPage: string | undefined;
  nextPageTitle: string | undefined;
  publishDateIso: string;
  slug: string;
  thumbnail: string;
  title: string;
}

/** Blog posts in chronological order, newest first */
export const blogPosts: IBlogPostMeta[] = [HelloWorldPost.meta];

export const blogPostMap = blogPosts.reduce<Map<string, IBlogPostMeta>>(
  (acc, curr) => {
    acc.set(curr.slug, curr);
    return acc;
  },
  new Map()
);
export const blogPostSummaries: IBlogPostMeta[] = blogPosts.slice(0, 6);
