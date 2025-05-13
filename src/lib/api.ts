import { supabase } from "./supabase";

// Posts API
export const postsApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from("posts")
      .select(
        `
        *,
        profiles:author_id(username, full_name, avatar_url),
        categories:category_id(name, slug)
      `,
      )
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  getBySlug: async (slug: string) => {
    const { data, error } = await supabase
      .from("posts")
      .select(
        `
        *,
        profiles:author_id(username, full_name, avatar_url),
        categories:category_id(name, slug)
      `,
      )
      .eq("slug", slug)
      .single();

    if (error) throw error;
    return data;
  },

  getByCategory: async (categorySlug: string) => {
    const { data, error } = await supabase
      .from("posts")
      .select(
        `
        *,
        profiles:author_id(username, full_name, avatar_url),
        categories:category_id(name, slug)
      `,
      )
      .eq("categories.slug", categorySlug)
      .order("published_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  create: async (post: any) => {
    const { data, error } = await supabase.from("posts").insert(post).select();

    if (error) throw error;
    return data;
  },

  update: async (slug: string, post: any) => {
    const { data, error } = await supabase
      .from("posts")
      .update(post)
      .eq("slug", slug)
      .select();

    if (error) throw error;
    return data;
  },

  delete: async (slug: string) => {
    const { error } = await supabase.from("posts").delete().eq("slug", slug);

    if (error) throw error;
    return true;
  },
};

// Categories API
export const categoriesApi = {
  getAll: async () => {
    const { data, error } = await supabase.from("categories").select("*");

    if (error) throw error;
    return data;
  },

  getBySlug: async (slug: string) => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;
    return data;
  },
};

// Comments API
export const commentsApi = {
  getByPostId: async (postId: string) => {
    const { data, error } = await supabase
      .from("comments")
      .select(
        `
        *,
        profiles:user_id(username, full_name, avatar_url)
      `,
      )
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data;
  },

  create: async (comment: any) => {
    const { data, error } = await supabase
      .from("comments")
      .insert(comment)
      .select();

    if (error) throw error;
    return data;
  },

  delete: async (id: string) => {
    const { error } = await supabase.from("comments").delete().eq("id", id);

    if (error) throw error;
    return true;
  },
};

// Auth API
export const authApi = {
  getCurrentUser: async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  },

  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return true;
  },
};
