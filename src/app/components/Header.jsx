'use client';

import logo from "@/assets/logo.png";
import { format } from "date-fns";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <>
      <div className="text-center py-15 space-y-2">
        <Image src={logo} width={400} alt="Logo" className="mx-auto h-auto" priority />
        <p className="text-lg text-slate-500">Journalism Without Fear or Favour</p>
        <p className="text-lg text-slate-500 font-semibold"><span className="text-slate-900">{format(new Date(), "EEEE, ")}</span>
          {format(new Date(), "MMMM dd, yyyy")}</p>
      </div>
      <div className="container flex mx-auto gap-3 bg-gray-100 p-4">
        <button className="btn bg-pink-700 text-white text-xl">Latest</button>
        <Marquee pauseOnHover speed={90}>
          I can be a React component, multiple React components, or just some text.
          I can be a React component, multiple React components, or just some text.
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
    </>
  )
}

export default Header
