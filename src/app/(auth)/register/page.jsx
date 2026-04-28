"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleRegisterFunction = async (data) => {
    const { email, name, photo, password } = data

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    console.log(res, error);
    if (error) {
      alert(error.message)
    }
    if (res) {
      alert("Registration Successfull")
    }

  }

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center py-10 px-4">
      <div className="bg-white w-full max-w-[750px] p-8 md:p-16 rounded-lg shadow-sm">

        <form onSubmit={handleSubmit(handleRegisterFunction)}>
          <fieldset className="border-none p-0 m-0 space-y-6">

            <legend className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#403F3F] mb-12">
                Register your account
              </h2>
              <div className="border-t border-gray-200 mb-12"></div>
            </legend>

            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#403F3F]">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full h-16 bg-[#F3F3F3] border-none focus:outline-none text-gray-600"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Photo URL Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#403F3F]">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered w-full h-16 bg-[#F3F3F3] border-none focus:outline-none text-gray-600"
                {...register("photo", { required: "Photo URL is required" })}
              />
              {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
            </div>

            {/* Email Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#403F3F]">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full h-16 bg-[#F3F3F3] border-none focus:outline-none text-gray-600"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xl font-bold text-[#403F3F]">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full h-16 bg-[#F3F3F3] border-none focus:outline-none text-gray-600"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="form-control">
              <div className="flex items-center gap-3 mt-4">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm rounded-sm border-gray-400"
                  id="terms"
                  {...register("terms", { required: "You must agree to the terms" })}
                />
                <label htmlFor="terms" className="text-[#706F6F] font-medium cursor-pointer">
                  Accept <span className="font-bold">Term & Conditions</span>
                </label>
              </div>
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>}
            </div>

            {/* Register Button */}
            <div className="form-control mt-8">
              <button className="btn btn-neutral w-full h-16 rounded-md text-xl font-semibold bg-[#403F3F] border-none text-white hover:bg-[#2b2a2a]">
                Register
              </button>
            </div>

          </fieldset>
        </form>

        <p className="text-center mt-8 text-[#706F6F] font-semibold">
          {"Already Have An Account ? "}{" "}
          <Link href="/login" className="text-[#FF8C47] hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage;