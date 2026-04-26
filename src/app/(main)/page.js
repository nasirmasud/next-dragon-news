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
  console.log(news.details);

  return (
    <div className='grid grid-cols-12 container mx-auto gap-6 py-16'>
      <div className='font-bold text-3xl col-span-3'>
        <p className='font-bold text-xl text-slate-800 py-3'>All Category</p>
        <LeftSide categories={categories} activeId={null} />
      </div>
      <div className='font-bold text-3xl bg-green-300 col-span-6'>
        All News
        <div></div>
      </div>
      <div className='col-span-3'>
        <RightSide />
      </div>
    </div>
  );
}
