import Link from "next/link"

const LeftSide = ({ categories, activeId }) => {
  return (
    <ul className='flex flex-col text-slate-400 gap-2 py-1.5'>
      {categories.news_category.map((category) => (
        <li
          className={`btn btn-ghost py-3 text-xl justify-start ${activeId === category.category_id ? "font-bold" : "font-normal"}`}
          key={category.category_id}
        >
          <Link href={`/category/${category.category_id}`}>
            {category.category_name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default LeftSide
