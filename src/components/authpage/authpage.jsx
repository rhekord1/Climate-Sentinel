import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import navbarlogo from "../../assets/logo.svg";

export default function AuthPage({ isLogin = true }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-silver py-8 px-4 sm:px-6">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Logo Section */}
          <div className="flex justify-center mb-6">
            <img 
              src={navbarlogo} 
              alt="Company Logo" 
              className="h-12 w-auto"  // Adjusted logo size
            />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#4D4D4D]">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-[#717171] mt-2 text-sm">
              {isLogin ? 'Sign in to continue' : 'Join us to get started'}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-[#4D4D4D] text-sm font-medium mb-1" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-[#4D4D4D] text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#4D4D4D] text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-[#717171] text-sm" />
                  ) : (
                    <FaEye className="text-[#717171] text-sm" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="mb-6">
                <label className="block text-[#4D4D4D] text-sm font-medium mb-1" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-[#E0E0E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-[#4CAF4F] focus:ring-[#4CAF4F] border-[#E0E0E0] rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-xs text-[#717171]">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-xs text-[#4CAF4F] hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#4CAF4F] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#3d8b40] transition-colors"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-[#717171] text-xs">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <a
                href={isLogin ? "/signup" : "/login"}
                className="text-[#4CAF4F] hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </a>
            </p>
          </div>

          {!isLogin && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E0E0E0]"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-2 bg-white text-[#717171]">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-1 px-3 border border-[#E0E0E0] rounded-lg bg-white text-xs font-medium text-[#4D4D4D] hover:bg-[#F5F7FA]"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center py-1 px-3 border border-[#E0E0E0] rounded-lg bg-white text-xs font-medium text-[#4D4D4D] hover:bg-[#F5F7FA]"
                >
                  GitHub
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}