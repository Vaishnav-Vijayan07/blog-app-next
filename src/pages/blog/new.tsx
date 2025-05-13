import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import BlogForm from "@/components/blog/BlogForm";
import { categoriesApi } from "@/lib/api";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NewBlogPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoriesApi.getAll();
        setCategories(data);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError(
          "Failed to load categories. Using default categories instead.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          {error && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700">{error}</p>
            </div>
          )}

          <BlogForm categories={categories} />
        </div>
      </div>
    </Layout>
  );
};

export default NewBlogPage;
