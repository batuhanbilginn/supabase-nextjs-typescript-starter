"use client";

import Post from "@/components/post";
import supabase from "@/lib/supabase-client";
import { PostWithAuthor } from "@/types/collection";
import { Inter } from "next/font/google";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);
  const fetcher = useCallback(async () => {
    const { data, error } = await supabase
      .from("posts")
      .select(`*, author(*)`)
      .returns<PostWithAuthor[]>();
    if (error) {
      console.log("error", error);
    } else {
      console.log(data);
      setPosts(data);
    }
  }, []);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  return (
    <main className={inter.className}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
