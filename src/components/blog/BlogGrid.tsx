import React from "react";
import BlogCard from "./BlogCard";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  date: string;
  slug: string;
}

interface BlogGridProps {
  posts?: BlogPost[];
  title?: string;
  description?: string;
}

const BlogGrid = ({
  posts = [
    {
      id: "1",
      title: "Getting Started with React and TypeScript",
      excerpt:
        "Learn how to set up a new project with React and TypeScript to build type-safe applications.",
      featuredImage:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      date: "2023-06-15",
      slug: "getting-started-with-react-typescript",
    },
    {
      id: "2",
      title: "Mastering Tailwind CSS for Rapid UI Development",
      excerpt:
        "Discover how to leverage Tailwind CSS to build beautiful user interfaces quickly and efficiently.",
      featuredImage:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80",
      date: "2023-07-22",
      slug: "mastering-tailwind-css",
    },
    {
      id: "3",
      title: "Building SEO-Friendly Websites with Next.js",
      excerpt:
        "Learn the best practices for creating SEO-optimized websites using Next.js and React.",
      featuredImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      date: "2023-08-10",
      slug: "seo-friendly-websites-nextjs",
    },
    {
      id: "4",
      title: "State Management in Modern React Applications",
      excerpt:
        "Compare different state management solutions for React and learn when to use each one.",
      featuredImage:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      date: "2023-09-05",
      slug: "state-management-react",
    },
    {
      id: "5",
      title: "Creating Accessible Web Applications",
      excerpt:
        "Understand the importance of accessibility and learn how to implement it in your web projects.",
      featuredImage:
        "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?w=800&q=80",
      date: "2023-10-18",
      slug: "creating-accessible-web-applications",
    },
    {
      id: "6",
      title: "The Future of Web Development: What's Coming in 2024",
      excerpt:
        "Explore upcoming trends and technologies that will shape the future of web development.",
      featuredImage:
        "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=800&q=80",
      date: "2023-11-30",
      slug: "future-web-development-2024",
    },
  ],
  title = "Latest Blog Posts",
  description = "Explore our collection of articles covering web development, design, and technology trends.",
}: BlogGridProps) => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              featuredImage={post.featuredImage}
              date={post.date}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
