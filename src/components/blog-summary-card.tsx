import Link from "next/link";
import * as React from "react";
import { BlogPostMeta } from "./blog-post-meta";

import type { IBlogPostMeta } from "../utils/get-blog-posts";

export function BlogSummaryCard(props: IBlogPostMeta): JSX.Element {
  const { description, publishDateIso, slug, thumbnail, title } = props;

  return (
    <Link href={"/blog/" + slug}>
      <a className="bg-primary cursor-pointer flex group hover p-4 rounded-lg text-primary hover:shadow">
        <img src={thumbnail}></img>
        <div>
          <h2 className={`font-bold group-hover:underline`}>{title}</h2>
          <BlogPostMeta publishDateIso={publishDateIso} />
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
}
