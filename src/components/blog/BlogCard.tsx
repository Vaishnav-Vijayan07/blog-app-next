import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
}

const BlogCard = ({
  title = "How to Build a Modern Blog with React",
  excerpt = "Learn the best practices for creating a high-performance blog using React and modern web technologies.",
  date = "April 15, 2023",
  readTime = "5 min read",
  author = "Jane Doe",
  category = "Development",
  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  slug = "how-to-build-a-modern-blog",
}: BlogCardProps) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-lg bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {category && (
          <Badge className="absolute top-3 right-3" variant="secondary">
            {category}
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold line-clamp-2 hover:text-primary transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3 mb-4">{excerpt}</p>
        <div className="flex items-center text-xs text-muted-foreground gap-4">
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link href={`/blog/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
