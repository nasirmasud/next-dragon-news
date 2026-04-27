import LeftSide from "@/app/components/homePage/LeftSide";
import RightSide from "@/app/components/homePage/RightSide";
import NewsCard from "@/app/components/NewsCard";
import { getCategories, getNewsByCategories } from "@/lib/data";


const NewsCategoryPage = async ({ params }) => {
  const { id } = await params

  const categories = await getCategories();
  const news = await getNewsByCategories(id);


  return (
    <div className='grid grid-cols-12 container mx-auto gap-6 py-16'>
      <div className='font-bold text-3xl col-span-3'>
        <p className='font-bold text-xl text-slate-800 py-3'>All Category</p>
        <LeftSide categories={categories} activeId={id} />
      </div>
      <div className='col-span-6'>
        All News
        <div>
          {news.length > 0 ? (news.map((item) => (<NewsCard key={item._id} data={item} />))) : <h3 className="text-2xl text-slate-500 text-center">No News Found In This Category</h3>}
        </div>
      </div>
      <div className='col-span-3'>
        <RightSide />
      </div>
    </div>
  )
}

export default NewsCategoryPage
