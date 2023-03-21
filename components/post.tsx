import { PostWithAuthor } from "@/types/collection";

const Post = ({ post }: { post: PostWithAuthor }) => {
  return (
    <div
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      {post.name}
      <div>{post.author.full_name}</div>
    </div>
  );
};

export default Post;
