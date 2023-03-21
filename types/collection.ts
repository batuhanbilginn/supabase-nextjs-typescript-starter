import { Database } from "./supabase";

export type PostType = Database["public"]["Tables"]["posts"]["Row"];
export type ProfileTypes = Database["public"]["Tables"]["profiles"]["Row"];
export interface PostWithAuthor extends Omit<PostType, "author"> {
  author: ProfileTypes;
}
