import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Category {
  name: string;
  slug: string;
  count: number;
  description: string;
  image: string;
}

const CategoriesPage = () => {
  const categories: Category[] = [
    {
      name: "Web Development",
      slug: "web-development",
      count: 12,
      description:
        "Articles about frontend and backend web development technologies and practices.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    },
    {
      name: "Design",
      slug: "design",
      count: 8,
      description:
        "Insights on UI/UX design, graphic design, and creative processes.",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
      name: "Technology",
      slug: "technology",
      count: 15,
      description: "The latest news and trends in technology and innovation.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
    },
    {
      name: "Business",
      slug: "business",
      count: 7,
      description:
        "Strategies for business growth, entrepreneurship, and professional development.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      name: "Lifestyle",
      slug: "lifestyle",
      count: 9,
      description:
        "Articles about productivity, work-life balance, and personal growth.",
      image:
        "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80",
    },
    {
      name: "Programming",
      slug: "programming",
      count: 11,
      description:
        "Deep dives into programming languages, frameworks, and coding best practices.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Categories</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our articles by topic to find the content that interests you
          most
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link href={`/categories/${category.slug}`} key={category.slug}>
            <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge className="absolute top-3 right-3">
                  {category.count}{" "}
                  {category.count === 1 ? "article" : "articles"}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
