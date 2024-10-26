// import axios from "axios";
// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import toast from "react-hot-toast";
// import UserContext from "../contex/user";


const Login = () => {

    // const [loginFormData, setLoginFormData] = useState({
    //   email: "",
    //   password: "",
    // })

    // const {userData, setUserData} = useContext(UserContext)


    // function handleLoginChange (e) {
    //   const {name, value} = e.target;
    //   setLoginFormData({...loginFormData, [name]: value });
    // }

   


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
            //   onChange={handleLoginChange}
              name="email"
            //   value={loginFormData.email}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
            //   onChange={handleLoginChange}
              name="password"
            //   value={loginFormData.password}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-orange-500 focus:border-orange-300"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <a to={"/"} className="inline-block align-baseline font-bold text-sm text-black-500 ">
              Forgot Password?
            </a>
          </div>
          <div className="text-center">
            <p className="text-gray-700">
              Dont have an account?{' '}
              <a href="/signup" className="text-orange-500 hover:text-orange-600 font-bold">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;