import PostCard from "@/components/PostCard";

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1/posts");

  if (!res.ok) {
    console.log("Could not fetch the posts");
  }

  return res.json();
};

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main className="p-10 flex flex-col">
      <h1 className="text-center  text-xl">Home page</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
