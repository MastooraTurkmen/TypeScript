interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="p-5 shadow-lg">
      <h2 className="">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
