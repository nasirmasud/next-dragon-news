import { FaGithub, FaGoogle } from "react-icons/fa"

const RightSide = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <p className="font-bold text-xl pb-3">Login With</p>
        <button className="btn btn-ghost border-slate-600 border"><FaGoogle /> Login with Google</button>
        <button className="btn btn-ghost border-slate-600 border"><FaGithub /> Login with Github</button>
      </div>
    </>
  )
}

export default RightSide
