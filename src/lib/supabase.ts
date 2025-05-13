import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

// Check if environment variables are available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a single supabase client for the entire app
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient<Database>(supabaseUrl, supabaseAnonKey)
    : null;

// Helper function to safely use supabase client
export function getSupabase() {
  if (!supabase) {
    console.error(
      "Supabase client not initialized. Please check your environment variables.",
    );
    throw new Error(
      "Supabase client not initialized. Please check your environment variables.",
    );
  }
  return supabase;
}
