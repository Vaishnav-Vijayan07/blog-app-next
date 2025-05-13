import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { postsApi } from "@/lib/api";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  content: z
    .string()
    .min(50, { message: "Content must be at least 50 characters" }),
  excerpt: z
    .string()
    .min(10, { message: "Excerpt must be at least 10 characters" }),
  featuredImage: z.string().url({ message: "Must be a valid URL" }),
  category_id: z.string().min(1, { message: "Please select a category" }),
});

type FormValues = z.infer<typeof formSchema>;

interface BlogFormProps {
  categories?: { id: string; name: string }[];
}

const BlogForm = ({ categories = [] }: BlogFormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Default categories if none provided
  const defaultCategories = [
    { id: "1", name: "Development" },
    { id: "2", name: "Design" },
    { id: "3", name: "Technology" },
    { id: "4", name: "Business" },
    { id: "5", name: "Lifestyle" },
  ];

  const displayCategories =
    categories.length > 0 ? categories : defaultCategories;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      featuredImage: "",
      category_id: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);

      // Generate a slug from the title
      const slug = data.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");

      // Create the post object
      const post = {
        title: data.title,
        content: data.content,
        excerpt: data.excerpt,
        featured_image: data.featuredImage,
        category_id: data.category_id,
        slug,
        published_at: new Date().toISOString(),
        // In a real app, you'd get the author_id from the authenticated user
        author_id: "1",
      };

      // Submit to API
      try {
        await postsApi.create(post);
        toast({
          title: "Success!",
          description: "Your blog post has been created.",
        });
        router.push(`/blog/${slug}`);
      } catch (error) {
        console.error("Error creating post:", error);
        toast({
          title: "Error",
          description:
            "There was a problem creating your post. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>Create New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter blog title" {...field} />
                  </FormControl>
                  <FormDescription>
                    Create a compelling title for your blog post.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="excerpt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Excerpt</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Brief summary of your post"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    A short summary that appears in blog listings.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="featuredImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Featured Image URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://example.com/image.jpg"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the URL of an image to display with your post.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {displayCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the category that best fits your post.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your blog post content here..."
                      className="min-h-[300px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    You can use HTML tags for formatting.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="px-0 pt-6">
              <Button type="submit" disabled={isSubmitting} className="mr-2">
                {isSubmitting ? "Publishing..." : "Publish Post"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/blog")}
              >
                Cancel
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BlogForm;
