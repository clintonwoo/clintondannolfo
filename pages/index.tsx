import { GetStaticPropsContext } from "next";
import * as React from "react";
import { BlogSummaryCard } from "../src/components/blog-summary-card";

import { Hero } from "../src/components/hero";
import { MainLayout } from "../src/layouts/main-layout";
import { blogPostSummaries, IBlogPostMeta } from "../src/utils/get-blog-posts";

export async function getStaticProps(_context: GetStaticPropsContext) {
  return {
    props: { blogPosts: blogPostSummaries }, // will be passed to the page component as props
  };
}

export interface IHomePageProps {
  blogPosts: IBlogPostMeta[];
}
export function HomePage(): JSX.Element {
  return (
    <MainLayout>
      <Hero />
      <section className="content-layout">
        <h2>Blog posts</h2>
        <div className="space-y-4">
          {blogPostSummaries.length > 0 ? (
            blogPostSummaries.map((blogPost) => (
              <BlogSummaryCard
                key={blogPost.slug}
                description={blogPost.description}
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
      </section>
    </MainLayout>
  );
}

export default HomePage;
