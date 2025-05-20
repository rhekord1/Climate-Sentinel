import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import navbarlogo from "../assets/Logo.svg";
import logpic from "../assets/logpic.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log(formData);
    window.location.href = "/"; // 🔁 Redirect to home page
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${logpic})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Login Box */}
      <div className="relative z-10 flex justify-end items-center h-full px-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 mr-2 md:mr-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={navbarlogo} alt="Company Logo" className="h-16 w-auto" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-[#4D4D4D] text-center mb-6">
            Log in to your account
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#4D4D4D] mb-1"
              >
                Organization Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
                placeholder="forestrycommission.org"
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#4D4D4D] mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 pr-10 border border-[#E0E0E0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#4CAF4F] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#3d8b40] transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
