// Import lại mảng dữ liệu tùy chỉnh từ file BlogCard
import Link from 'next/link';
import { customBlogData } from "../../../components/BlogCard";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null; 
  return res.json();
}

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Bài viết không tồn tại (404)</h1>
        <Link href="/" className="bg-indigo-600 text-white px-4 py-2 rounded-md">Quay lại trang chủ</Link>
      </div>
    );
  }

  const customPost = customBlogData[post.id % customBlogData.length];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-12">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border">
        
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">
            <span className="mr-2">←</span> Back to Blog
          </Link>
        </div>

        <span className="text-sm text-indigo-500 font-semibold uppercase tracking-widest">
          {customPost.category}
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
          {customPost.title}
        </h1>

        <div className="flex items-center text-sm text-gray-400 mb-8 border-b pb-6">
          <span>Author: User #{post.userId}</span>
          <span className="mx-3">•</span>
          <span>Blog ID: {post.id}</span>
        </div>

        <div className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
          {customPost.body}
          <br/><br/>
          {customPost.body}
        </div>
        
      </div>
    </div>
  );
}