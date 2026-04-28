"use client"

import Link from 'next/link';
import { IoArrowBackOutline, IoHomeOutline, IoNewspaperOutline, IoSearchOutline } from 'react-icons/io5';

// added test comment
const notFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative mb-8">
        <IoNewspaperOutline className="text-9xl text-gray-200" />
        <span className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-gray-800">
          404
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
        Headline Missing: Story Not Found
      </h1>
      <p className="max-w-md text-gray-600 mb-10">
        The article you are looking for might have been retracted, moved, or perhaps the URL has a typo. Our editors are on the case.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
        >
          <IoHomeOutline size={18} />
          Back to Homepage
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
        >
          <IoArrowBackOutline size={18} />
          Previous Page
        </button>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 w-full max-w-lg">
        <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">
          Search our archives
        </p>
        <div className="relative max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
          />
          <IoSearchOutline className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
    </div>
  )
}

export default notFound
