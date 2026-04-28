import userLogo from "@/assets/user.png"
import Image from "next/image"
import Link from "next/link"
import NavLink from "./NavLink"

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between py-5 items-center">
      <div></div>
      <ul className="flex justify-between gap-3 text-lg text-slate-500">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex justify-between gap-2 items-center">
        <Link href={"/user"}>
          <Image src={userLogo} height={40} width={40} alt="user" />
        </Link>
        <button className="btn bg-slate-700 text-white text-xl">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar
