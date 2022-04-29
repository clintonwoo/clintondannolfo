import { IBlogPostMeta } from "../utils/get-blog-posts";

declare global {
  declare module "*.mdx" {
    export const meta: IBlogPostMeta;
  }
}

export {};
