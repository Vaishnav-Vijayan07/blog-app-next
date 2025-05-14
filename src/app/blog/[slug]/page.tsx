"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import BlogPostDetail from "@/components/blog/BlogPostDetail";
import { postsApi } from "@/lib/api";
import SEO from "@/components/SEO";

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        if (slug) {
          const data = await postsApi.getBySlug(slug);
          setPostData(data);
        }
      } catch (err) {
        console.error("Error fetching post data:", err);
      }
    };

    fetchPostData();
  }, [slug]);

  return (
    <Layout>
      <SEO
        title={
          postData
            ? `${postData.title || "Blog Post"} | BlogMaster`
            : "Blog Post | BlogMaster"
        }
        description={
          postData
            ? postData.excerpt || "Read our latest blog post"
            : "Read our latest blog post"
        }
        image={postData ? postData.featuredImage || "" : ""}
        url={typeof window !== "undefined" ? window.location.href : ""}
        type="article"
        canonicalUrl={typeof window !== "undefined" ? window.location.href : ""}
      />
      <BlogPostDetail slug={slug} />
    </Layout>
  );
}
