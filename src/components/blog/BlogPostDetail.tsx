import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/blog/BlogCard";
import { postsApi } from "@/lib/api";

interface BlogPostDetailProps {
  slug: string;
}

const BlogPostDetail = ({ slug }: BlogPostDetailProps) => {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (slug) {
          const postData = await postsApi.getBySlug(slug);
          setPost(postData);

          // In a real app, you'd fetch related posts based on category or tags
          const allPosts = await postsApi.getAll();
          setRelatedPosts(
            allPosts.filter((p) => p.id !== postData.id).slice(0, 3),
          );
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load blog post.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Default mock data if no post is provided
  const defaultPost = {
    title: "How to Build a Modern Blog with React and Tailwind CSS",
    slug: slug || "how-to-build-modern-blog",
    publishedDate: "2023-06-15",
    featuredImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    content: `<p>Building a modern blog requires careful planning and the right technology stack. In this comprehensive guide, we'll walk through the process of creating a responsive, SEO-friendly blog using React and Tailwind CSS.</p>

<h2>Getting Started with React</h2>
<p>React provides an excellent foundation for building interactive user interfaces. Its component-based architecture makes it easy to create reusable UI elements, perfect for a blog where consistency is key.</p>

<p>First, let's set up our React project:</p>
<pre><code>npx create-react-app my-blog
cd my-blog
npm start</code></pre>

<h2>Integrating Tailwind CSS</h2>
<p>Tailwind CSS is a utility-first CSS framework that allows for rapid UI development. It's particularly well-suited for blogs due to its flexibility and ease of customization.</p>

<p>To add Tailwind to your React project:</p>
<pre><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p</code></pre>

<h2>Creating the Blog Structure</h2>
<p>A well-structured blog typically includes:</p>
<ul>
<li>A homepage with featured posts</li>
<li>Individual post pages</li>
<li>Category pages</li>
<li>An about page</li>
<li>A contact form</li>
</ul>

<p>Each of these should be responsive and follow SEO best practices.</p>

<h2>Optimizing for SEO</h2>
<p>To ensure your blog ranks well in search engines:</p>
<ul>
<li>Use semantic HTML elements</li>
<li>Implement proper heading hierarchy</li>
<li>Add meta tags for each page</li>
<li>Create a sitemap</li>
<li>Optimize images with alt text</li>
</ul>

<h2>Conclusion</h2>
<p>Building a modern blog with React and Tailwind CSS offers the perfect balance of performance, aesthetics, and developer experience. By following the steps outlined in this guide, you'll be well on your way to creating a blog that not only looks great but also performs well in search rankings.</p>`,
    excerpt:
      "Learn how to build a modern, SEO-friendly blog using React and Tailwind CSS with this comprehensive guide.",
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
      bio: "Senior Frontend Developer with 8+ years of experience building modern web applications.",
    },
    categories: ["React", "Tailwind CSS", "Web Development"],
  };

  const defaultRelatedPosts = [
    {
      title: "10 Tailwind CSS Tips Every Developer Should Know",
      slug: "tailwind-css-tips",
      publishedDate: "2023-05-20",
      featuredImage:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
      excerpt:
        "Improve your Tailwind CSS workflow with these essential tips and tricks for modern web development.",
    },
    {
      title: "React Performance Optimization Techniques",
      slug: "react-performance-optimization",
      publishedDate: "2023-04-12",
      featuredImage:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&q=80",
      excerpt:
        "Learn how to optimize your React applications for better performance and user experience.",
    },
    {
      title: "Building Accessible Web Applications",
      slug: "building-accessible-web-applications",
      publishedDate: "2023-03-05",
      featuredImage:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&q=80",
      excerpt:
        "A comprehensive guide to creating web applications that are accessible to all users.",
    },
  ];

  const currentPost = post || defaultPost;
  const currentRelatedPosts =
    relatedPosts.length > 0 ? relatedPosts : defaultRelatedPosts;

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
      </div>

      {/* Hero section with featured image */}
      <div className="w-full h-[400px] md:h-[500px] mt-6 relative overflow-hidden">
        <img
          src={currentPost.featuredImage}
          alt={currentPost.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {currentPost.categories.map((category, index) => (
              <Badge key={index} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>

          {/* Post title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {currentPost.title}
          </h1>

          {/* Author info and date */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage
                  src={currentPost.author.avatar}
                  alt={currentPost.author.name}
                />
                <AvatarFallback>
                  {currentPost.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{currentPost.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(currentPost.publishedDate)}
                </p>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Share on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Share on Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Share via Email">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Post content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* Author bio */}
          <div className="bg-muted p-6 rounded-lg mb-12">
            <div className="flex items-center mb-4">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage
                  src={currentPost.author.avatar}
                  alt={currentPost.author.name}
                />
                <AvatarFallback>
                  {currentPost.author.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">
                  About {currentPost.author.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {currentPost.author.bio}
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Related posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentRelatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={index}
                  title={relatedPost.title}
                  slug={relatedPost.slug}
                  date={relatedPost.publishedDate}
                  imageUrl={relatedPost.featuredImage}
                  excerpt={relatedPost.excerpt}
                  author="Author"
                  category="Category"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetail;
