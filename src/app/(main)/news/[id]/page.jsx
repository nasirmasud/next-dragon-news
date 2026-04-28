import RightSide from "@/app/components/homePage/RightSide";
import { getNewsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsById(id)

  return {
    title: news.title,
    description: news.details
  }
}

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params
  const news = await getNewsById(id)

  console.log(news);

  if (!news) {
    return <div className="text-center py-20 text-3xl">News not found!</div>;
  }

  return (
    <div className="grid grid-cols-12 container mx-auto gap-6 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl my-16 px-4 md:px-8 font-sans col-span-12 lg:col-span-9">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden p-6 md:p-10 space-y-8">
          <div className="w-full h-[400px] md:h-[500px] relative rounded-xl overflow-hidden">
            <Image
              src={news.image_url}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight">
            {news.title}
          </h1>
          <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              {news.details}
            </p>
          </div>
          <div className="pt-10 border-t border-gray-100 mt-10">
            <Link href={`/category/${news.category_id}`} className="inline-flex items-center gap-3 px-6 py-3 bg-[#D32F4F] text-white font-semibold text-lg rounded-md hover:bg-[#b02341] transition duration-300 shadow-md">
              <FaArrowLeft />
              <span>All news in this category</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3 my-16">
        <RightSide />
      </div>
    </div>
  )
}

export default NewsDetailsPage
