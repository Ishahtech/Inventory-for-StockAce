import { Link } from "react-router-dom";
import stockace from '.././Asset/icons/stockace.svg';

function Signin() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 relative flex flex-col justify-center items-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-800 to-black opacity-50"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl font-semibold font-montserrat mb-4 text-center">Track your Sales Seamlessly</h1>
          <p className="text-lg font-medium font-karla text-center max-w-lg">
            This feature not only records every transaction but also provides insight into your sales pattern.
          </p>
        </div>
        <img src={stockace} alt="Background" className="absolute inset-0 w-full h-full object-cover z-5 opacity-50" />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <div className="p-4 bg-gray-100 flex items-center gap-4 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold font-karla">Welcome Back</h2>
              <img src={stockace} alt="stockace" className="w-12 h-12" />
            </div>
            <p className="text-lg text-gray-600 font-karla text-center">
              Today is a new day. It’s your day. You shape it. Log in to start managing your sales.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-600 font-karla">Email</label>
              <input
                type="email"
                placeholder="xyz@email.com"
                className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="text-sm text-gray-600 font-karla">Password</label>
              <input
                type="password"
                placeholder="At least 8 Characters"
                className="w-full h-12 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Link to="/forgot-password" className="text-blue-700 text-sm font-karla">Forgot Password?</Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg text-gray-800 font-karla">Already have an account?</span>
              <Link to="/signup" className="text-blue-700 text-lg font-karla">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
