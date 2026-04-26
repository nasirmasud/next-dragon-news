import Image from "next/image";
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import LeftSide from "../components/homePage/LeftSide";
import RightSide from "../components/homePage/RightSide";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();

  return data.data;
}

async function getNewsByCategories(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();

  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  const news = await getNewsByCategories("02");

  return (
    <div className='grid grid-cols-12 container mx-auto gap-6 py-16'>
      <div className='font-bold text-3xl col-span-3'>
        <p className='font-bold text-xl text-slate-800 py-3'>All Category</p>
        <LeftSide categories={categories} activeId={null} />
      </div>
      <div className='col-span-6'>
        All News
        <div>
          {news.map((data) => {
            return (
              <div
                key={data._id}
                className='max-w-4xl mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden font-sans'
              >
                <div className='flex items-center justify-between p-4 bg-gray-50 border-b border-gray-100'>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={data.author.img}
                      alt={data.title}
                      width={50}
                      height={50}
                      className='rounded-full object-cover'
                    />
                    <div>
                      <h4 className='text-xl font-semibold text-gray-950'>
                        {data.author.name}
                      </h4>
                      <p className='text-gray-600'>
                        {data.author.published_date}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 text-gray-500'>
                    <FaRegBookmark className='w-6 h-6 cursor-pointer hover:text-gray-800 transition' />
                    <FaShareAlt className='w-6 h-6 cursor-pointer hover:text-gray-800 transition' />
                  </div>
                </div>
                <div className='p-4 md:p-6 lg:p-8 space-y-6'>
                  <h2 className='text-2xl md:text-3xl font-extrabold text-gray-950 leading-snug'>
                    {data.title}
                  </h2>
                  <div className='w-full h-[400px] relative rounded-lg overflow-hidden'>
                    <Image
                      src={data.image_url}
                      alt='News headline'
                      fill
                      className='object-cover'
                      priority
                    />
                  </div>
                  <div className='space-y-3'>
                    <p className='text-gray-600 text-lg leading-relaxed'>
                      {data.details}
                    </p>
                    <a
                      href='#'
                      className='inline-block text-[#ED6F33] font-semibold text-xl hover:underline'
                    >
                      Read More
                    </a>
                  </div>
                  <div className='pt-6 border-t border-gray-200'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3'>
                        <div className='flex items-center gap-1.5 text-[#F89D2B]'>
                          {[...Array(5)].map((_, index) => {
                            return (
                              <FaStar
                                key={index}
                                className={`w-6 h-6 ${index < Math.round(data.rating.number) ? "text-[#F89D2B]" : "text-gray-300"}`}
                              />
                            );
                          })}
                        </div>
                        <span className='text-xl font-bold text-gray-900'>
                          {data.rating.number}
                        </span>
                      </div>
                      <div className='flex items-center gap-2.5 text-gray-600'>
                        <FaRegEye className='w-7 h-7' />
                        <span className='text-xl font-semibold'>
                          {data.total_view}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='col-span-3'>
        <RightSide />
      </div>
    </div>
  );
}
