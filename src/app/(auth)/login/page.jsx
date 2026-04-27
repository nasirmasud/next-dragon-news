"use client"
import Link from "next/link"
import { useForm } from "react-hook-form"

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleLoginFunction = (data) => {
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-[750px] p-8 md:p-16 rounded-lg shadow-sm">

        <form onSubmit={handleSubmit(handleLoginFunction)}>
          {/* fieldset দিয়ে পুরো ফর্মের ইনপুটগুলোকে গ্রুপ করা হয়েছে */}
          <fieldset className="border-none p-0 m-0 space-y-6">

            {/* legend ব্যবহার করে শিরোনাম দেওয়া হয়েছে, যা অ্যাক্সেসিবিলিটির জন্য সেরা */}
            <legend className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#403F3F] mb-12">
                Login your account
              </h2>
              {/* Divider line */}
              <div className="border-t border-gray-200 mb-12"></div>
            </legend>

            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#403F3F]">
                  Email address
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Enter your email address"
                className="input input-bordered w-full h-16 bg-[#F3F3F3] border-none focus:outline-none text-gray-600"
              />
              {errors.email && (
                <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#403F3F]">
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                className="input input-bordered w-full h-16 bg-[#F3F3F3] border-none focus:outline-none text-gray-600"
              />
              {errors.password && (
                <p className="text-red-500 mt-1 text-sm">{errors.password.message}</p>
              )}
            </div>

            {/* Login Button */}
            <div className="form-control mt-8">
              <button className="btn btn-neutral w-full h-16 rounded-md text-xl font-semibold bg-[#403F3F] border-none text-white hover:bg-[#2b2a2a]">
                Login
              </button>
            </div>

          </fieldset>
        </form>

        {/* Register Link */}
        <p className="text-center mt-8 text-[#706F6F] font-semibold">
          {"Don't Have An Account? "}
          <Link href="/register" className="text-[#FF8C47] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage