import { IBlogPostMeta } from "../utils/get-blog-posts";

declare module "*.mdx" {
  export const meta: IBlogPostMeta;
}

export {};
