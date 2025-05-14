"use client";

import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BlogPostDetail from "@/components/blog/BlogPostDetail";

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;

  return (
    <Layout>
      <BlogPostDetail slug={slug} />
    </Layout>
  );
}
