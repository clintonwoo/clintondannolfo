import { GetStaticPropsContext } from "next";
import Head from "next/head";
import * as React from "react";

import { BlogSummaryCard } from "../src/components/blog-summary-card";
import type { IBlogPostMeta } from "../src/utils/get-blog-posts";
import { MainLayout } from "../src/layouts/main-layout";
import { blogPostSummaries } from "../src/utils/get-blog-posts";

export async function getStaticProps(_context: GetStaticPropsContext) {
  return {
    props: { blogPostSummaries }, // will be passed to the page component as props
  };
}

export interface IBlogPageProps {
  blogPostSummaries: IBlogPostMeta[];
}

export function BlogPage(props: IBlogPageProps): JSX.Element {
  const { blogPostSummaries } = props;

  return (
    <MainLayout className="content-layout py-4">
      <Head>
        <title>Blog | Clinton D'Annolfo</title>
      </Head>
      <h1 className="font-bold pl-1 pb-2">Posts</h1>
      <div className="space-y-4">
        {blogPostSummaries.length > 0 ? (
          blogPostSummaries.map((blogPost) => (
            <BlogSummaryCard
              key={blogPost.slug}
              description={blogPost.description}
              nextPage={blogPost.nextPage}
              nextPageTitle={blogPost.nextPageTitle}
              publishDateIso={blogPost.publishDateIso}
              slug={blogPost.slug}
              thumbnail={blogPost.thumbnail}
              title={blogPost.title}
            />
          ))
        ) : (
          <div>No posts yet.</div>
        )}
      </div>
    </MainLayout>
  );
}

export default BlogPage;
