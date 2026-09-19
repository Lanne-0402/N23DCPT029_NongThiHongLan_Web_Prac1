import Header from '../../components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-3xl mx-auto p-6 md:p-12">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">About MyBlog</h1>
          <p className="text-gray-600 leading-relaxed">
            MyBlog là trang blog sử dụng Next.js và Tailwind CSS để hiển thị
            các bài viết từ JSONPlaceholder.
          </p>
        </div>
      </main>
    </div>
  );
}
