import React from "react";
import Layout from "@/components/layout/Layout";
import BlogGrid from "@/components/blog/BlogGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const BlogPage = () => {
  return (
    <Layout>
      <SEO
        title="Blog Posts | BlogMaster"
        description="Explore our latest articles and insights on web development, design, and technology."
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              Blog Posts
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our latest articles and insights
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/blog/new">
              <Button className="flex items-center gap-2">
                <PlusCircle size={16} />
                New Post
              </Button>
            </Link>
            <div className="relative w-full md:w-auto">
              <div className="flex w-full md:w-[300px]">
                <Input placeholder="Search articles..." className="pr-10" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <BlogGrid title="" description="" />

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="mr-2">
            Previous
          </Button>
          <Button variant="outline" className="ml-2">
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
