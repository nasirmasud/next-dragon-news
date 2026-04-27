import Link from "next/link"

const LeftSide = ({ categories, activeId }) => {
  return (
    <ul className='flex flex-col text-slate-400 gap-2 py-1.5'>
      {categories.news_category.map((category) => (
        <li key={category.category_id}>
          <Link
            href={`/category/${category.category_id}`}
            className={`btn btn-ghost p-8 text-xl justify-start w-full 
      ${activeId === category.category_id ? "font-bold border-2 border-pink-700 text-slate-700" : "font-normal"}`}
          >
            {category.category_name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LeftSide
