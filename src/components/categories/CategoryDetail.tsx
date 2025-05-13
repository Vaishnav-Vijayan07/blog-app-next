import React, { useEffect, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { categoriesApi, postsApi } from "@/lib/api";

interface CategoryDetailProps {
  slug: string;
}

const CategoryDetail = ({ slug }: CategoryDetailProps) => {
  const [category, setCategory] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryAndPosts = async () => {
      try {
        if (slug) {
          const categoryData = await categoriesApi.getBySlug(slug);
          setCategory(categoryData);

          const postsData = await postsApi.getByCategory(slug);
          setPosts(postsData);
        }
      } catch (err) {
        console.error("Error fetching category data:", err);
        setError("Failed to load category and posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryAndPosts();
  }, [slug]);

  // Mock data for categories
  const categories = {
    "web-development": {
      name: "Web Development",
      description:
        "Articles about frontend and backend web development technologies and practices.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    },
    design: {
      name: "Design",
      description:
        "Insights on UI/UX design, graphic design, and creative processes.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    },
    technology: {
      name: "Technology",
      description: "The latest news and trends in technology and innovation.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    },
    business: {
      name: "Business",
      description:
        "Strategies for business growth, entrepreneurship, and professional development.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    },
    lifestyle: {
      name: "Lifestyle",
      description:
        "Articles about productivity, work-life balance, and personal growth.",
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1200&q=80",
    },
    programming: {
      name: "Programming",
      description:
        "Deep dives into programming languages, frameworks, and coding best practices.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    },
  };

  // Mock posts data
  const mockPosts = [
    {
      id: "1",
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to simplify your components and manage state effectively.",
      featuredImage:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      date: "April 15, 2023",
      author: "Jane Smith",
      slug: "getting-started-with-react-hooks",
    },
    {
      id: "2",
      title: "The Future of Web Development",
      excerpt:
        "Explore the upcoming trends and technologies that will shape the future of web development.",
      featuredImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      date: "June 10, 2023",
      author: "John Doe",
      slug: "future-of-web-development",
    },
    {
      id: "3",
      title: "Mastering CSS Grid Layout",
      excerpt:
        "A comprehensive guide to using CSS Grid for creating complex and responsive layouts.",
      featuredImage:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
      date: "July 5, 2023",
      author: "Alex Johnson",
      slug: "mastering-css-grid-layout",
    },
    {
      id: "4",
      title: "Optimizing Website Performance",
      excerpt:
        "Learn techniques to improve your website's loading speed and overall performance.",
      featuredImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      date: "August 22, 2023",
      author: "Emily Chen",
      slug: "optimizing-website-performance",
    },
    {
      id: "5",
      title: "Introduction to TypeScript",
      excerpt:
        "Discover how TypeScript can improve your JavaScript development experience with static typing.",
      featuredImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      date: "September 14, 2023",
      author: "Michael Johnson",
      slug: "introduction-to-typescript",
    },
    {
      id: "6",
      title: "Building Accessible Web Forms",
      excerpt:
        "Best practices for creating forms that are usable by everyone, including people with disabilities.",
      featuredImage:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
      date: "October 3, 2023",
      author: "Sarah Williams",
      slug: "building-accessible-web-forms",
    },
  ];

  const currentCategory = category ||
    categories[slug as keyof typeof categories] || {
      name: "Category Not Found",
      description: "This category does not exist.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    };

  const currentPosts = posts.length > 0 ? posts : mockPosts;

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
    <div>
      <div className="w-full h-[300px] relative overflow-hidden">
        <img
          src={currentCategory.image}
          alt={currentCategory.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentCategory.name}
            </h1>
            <p className="text-lg max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.featuredImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              category={currentCategory.name}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" className="mr-2">
            Previous
          </Button>
          <Button variant="outline" className="ml-2">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
