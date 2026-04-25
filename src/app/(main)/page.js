import LeftSide from "../components/homePage/LeftSide";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();

  return data.data;
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className='grid grid-cols-12 container mx-auto gap-6 py-16'>
      <div className='font-bold text-3xl col-span-3'>
        <p className='font-bold text-xl text-slate-800 py-3'>All Category</p>
        <LeftSide categories={categories} activeId={null} />
      </div>
      <div className='font-bold text-3xl bg-green-300 col-span-6'>All News</div>
      <div className='font-bold text-3xl bg-purple-300 col-span-3'>
        Social Links
      </div>
    </div>
  );
}
