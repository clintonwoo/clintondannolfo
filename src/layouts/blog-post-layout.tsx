import { format, parseISO } from "date-fns";
import * as React from "react";

import type { IBlogPostMeta } from "../utils/get-blog-posts";
import { MainLayout } from "./main-layout";

import thumbnail from "../assets/1516937450623.webp";
import Link from "next/link";

export interface IBlogPostLayoutProps {
  meta: IBlogPostMeta;
  children;
}

export function BlogPostLayout(props: IBlogPostLayoutProps): JSX.Element {
  const {
    children,
    meta: { nextPage, nextPageTitle, publishDateIso, slug, title },
  } = props;

  const publishedDateMemo = React.useMemo(
    () => format(parseISO(publishDateIso), "d MMM Y"),
    [publishDateIso]
  );

  return (
    <MainLayout className="content-layout py-4">
      <nav className="text-xs">
        <Link href="/blog">Blog</Link>
        <span> &#62; </span>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </nav>
      <section className="py-4">
        <h1 className="font-bold">{title}</h1>
        <div className="italic text-xs">{publishedDateMemo}</div>
      </section>
      <article className="space-y-1">{children}</article>
      <section className="flex py-12">
        <div>
          <img
            className="rounded-full w-16"
            alt="Author thumbnail"
            src={thumbnail.src}
          />
        </div>
        <div className="p-3 text-sm">
          <div>
            Post by{" "}
            <a href="https://twitter.com/ClintonDAnnolfo">Clinton D'Annolfo</a>
          </div>
          <em>Making the world better one day at a time.</em>
        </div>
      </section>
      <section className="flex justify-between py-4 text-base">
        <Link href="/blog">
          <a>
            👈
            <span className="ml-2">Back to blog</span>
          </a>
        </Link>
        {nextPage && (
          <Link href={nextPage}>
            <a>
              <span className="mr-2">{nextPageTitle}</span>
              👉
            </a>
          </Link>
        )}
      </section>
    </MainLayout>
  );
}
