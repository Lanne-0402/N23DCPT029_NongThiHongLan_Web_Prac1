import Link from 'next/link';

export const customBlogData = [
  {
    category: "PHÁT TRIỂN GAME AAA",
    title: "Xây dựng môi trường 3D & Đồ họa Cinematic",
    body: "Ứng dụng các nguyên lý thiết kế 2D và 3D để kiến tạo không gian chân thực trong game AAA. Quá trình này đòi hỏi sự kết hợp chặt chẽ giữa tạo hình nhân vật và tối ưu hóa hiệu ứng hình ảnh (VFX) chuẩn điện ảnh nhằm mang lại trải nghiệm nhập vai tối đa cho người chơi."
  },
  {
    category: "COMPUTER VISION",
    title: "Nhận diện chuyển động với Python và MediaPipe",
    body: "Khai thác sức mạnh của thị giác máy tính thông qua hệ sinh thái Python. Bằng cách kết hợp thư viện NumPy để xử lý ma trận, OpenCV để phân tích hình ảnh và MediaPipe (đặc biệt là hand_landmarker), hệ thống có thể theo dõi chuyển động thực tế với độ trễ cực thấp."
  },
  {
    category: "XỬ LÝ ÂM THANH",
    title: "Quy trình chuẩn hóa Audio đa phương tiện",
    body: "Để tối ưu hóa chất lượng âm thanh trên Audacity hoặc After Effects, quy trình hậu kỳ cần tuân thủ trình tự nghiêm ngặt: bắt đầu từ việc khử tiếng vang (dereverberation) trước tiên, tiếp theo là hạ tông (lower pitch), sau đó chuyển đổi sang định dạng mono, và cuối cùng là loại bỏ nhiễu (distortion)."
  },
  {
    category: "LẬP TRÌNH DI ĐỘNG & WEB",
    title: "Tối ưu hóa quy trình triển khai ứng dụng",
    body: "Sử dụng Android Studio để xây dựng các module phức tạp như Location Manager. Quá trình phát triển đòi hỏi việc quản lý mã nguồn liên tục trên GitHub và tự động hóa khâu triển khai web thông qua nền tảng Render để đảm bảo tính ổn định."
  }
];

export default function BlogCard({ post }) {
  // Lấy dữ liệu tùy chỉnh dựa vào ID của bài viết (chia lấy dư để lặp lại nội dung nếu có nhiều hơn 4 bài)
  const customPost = customBlogData[post.id % customBlogData.length];

  return (
    <div className="border p-5 rounded-xl shadow-sm hover:shadow-lg transition bg-white flex flex-col h-full">
      <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wide">
        {customPost.category}
      </span>
      
      <h2 className="font-bold text-lg mt-2 mb-1 line-clamp-2">
        {customPost.title}
      </h2>
      <p className="text-gray-500 text-sm line-clamp-3 mb-4">
        {customPost.body}
      </p>
      
      <div className="flex justify-between items-center mt-auto">
        <span className="text-sm text-gray-400">User #{post.userId}</span>
        <Link href={`/blog/${post.id}`} className="bg-indigo-600 text-white px-3 py-1 rounded text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}