import Image from 'next/image';
import { FaRegBookmark, FaShareAlt, FaStar, FaRegEye } from 'react-icons/fa';

const NewsCard = () => {
  // কার্ডের তথ্যগুলো ভেরিয়েবলে সেট করে নিচ্ছি যাতে এটি ডাইনামিক করা সহজ হয়।
  const authorName = "Awlad Hossain";
  const postDate = "2022-08-21";
  const title = "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet";
  const mainImage = "https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png"; // আপনার ছবির লিংকটি ব্যবহার করলাম
  const excerpt = "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a...";
  const rating = 4.9;
  const views = 499;

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden font-sans">
      
      {/* 1. Header Section (Author info & icons) */}
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <Image 
            src="/author-placeholder.jpg" // এখানে আপনার লেখকের ছবি বা সঠিক ছবির পাথ দিন। আমি এখন ছবির মতো একটা বসাচ্ছি।
            alt={authorName}
            width={50} 
            height={50} 
            className="rounded-full object-cover" 
          />
          <div>
            <h4 className="text-xl font-semibold text-gray-950">{authorName}</h4>
            <p className="text-gray-600">{postDate}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-gray-500">
          <FaRegBookmark className="w-6 h-6 cursor-pointer hover:text-gray-800 transition" />
          <FaShareAlt className="w-6 h-6 cursor-pointer hover:text-gray-800 transition" />
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-4 md:p-6 lg:p-8 space-y-6">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 leading-snug">
          {title}
        </h2>

        {/* Main News Image */}
        <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
          <Image 
            src={mainImage} 
            alt="News headline image"
            fill // এটি আপনার প্যারেন্ট ডিভের পুরো জায়গা জুড়ে ছবিটিকে বসাবে
            className="object-cover" // ছবিটিকে সঠিকভাবে ক্রপ এবং স্কেল করবে
            priority // যেহেতু এটি বড় ইমেজ, এটি আগে লোড হতে সাহায্য করবে (LCP Optimization)
          />
        </div>

        {/* Excerpt and Read More */}
        <div className="space-y-3">
          <p className="text-gray-600 text-lg leading-relaxed">
            {excerpt}
          </div>
          <a href="#" className="inline-block text-[#ED6F33] font-semibold text-xl hover:underline">
            Read More
          </a>
        </div>
        
        {/* 3. Footer Section (Rating, Views, Line) */}
        <div className="pt-6 border-t border-gray-200 space-y-5">
          <div className="flex items-center justify-between">
            
            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[#F89D2B]">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="w-6 h-6" />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">{rating}</span>
            </div>
            
            {/* Views */}
            <div className="flex items-center gap-2.5 text-gray-600">
              <FaRegEye className="w-7 h-7" />
              <span className="text-xl font-semibold">{views}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewsCard;