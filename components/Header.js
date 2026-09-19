import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-indigo-600">LanBlog</h1>
      <nav className="space-x-6 hidden md:flex">
        <Link href="/" className="text-gray-500">Home</Link>
        <Link href="/blog" className="text-gray-500">Articles</Link>
        <Link href="/about" className="text-gray-500">About</Link>
      </nav>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        Subscribe
      </button>
    </header>
  );
}