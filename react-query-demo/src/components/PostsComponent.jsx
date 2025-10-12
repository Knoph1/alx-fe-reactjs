// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

// ✅ Named async function to fetch posts
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

function PostsComponent() {
  // ✅ Include cache configuration and required flags
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 2, // 2 minutes before data is considered stale
    cacheTime: 1000 * 60 * 5, // keep data in cache for 5 minutes after unmount
    refetchOnWindowFocus: true, // refetch when user focuses the window
    keepPreviousData: true, // keep old data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts (React Query Caching Demo)</h2>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <p style={{ color: "gray" }}>
        Cached for 5 min | Stale after 2 min | Refetch on focus: enabled
      </p>
    </div>
  );
}

export default PostsComponent;
