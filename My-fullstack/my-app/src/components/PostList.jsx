import { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => setError("Failed to fetch posts."))
      .finally(() => setLoading(false));
  }, [page]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto space-y-4 mt-8">
      <h2 className="text-2xl font-bold text-center">Posts</h2>
      <div className="flex space-x-2 mb-4">
        <input 
          type="text" 
          className="border flex-grow p-2 rounded" 
          placeholder="Search posts..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredPosts.map(post => (
          <Card key={post.id} title={post.title}>
            <p>{post.body}</p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        <Button variant="secondary" onClick={() => setPage(p => Math.max(p - 1, 1))}>Previous</Button>
        <Button variant="secondary" onClick={() => setPage(p => p + 1)}>Next</Button>
      </div>
    </div>
  );
}
