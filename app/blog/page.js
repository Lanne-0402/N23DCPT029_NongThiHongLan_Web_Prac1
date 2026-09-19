import Header from '../../components/Header';
import BlogCard from '../../components/BlogCard';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function ArticlesPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Articles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
