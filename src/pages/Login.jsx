import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import api, { getCSRFToken } from "../auth/api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      await getCSRFToken();
      const response = await api.post("/api/login", {
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 200 || response.status === 204) {
        navigate("/"); // Add navigation on success
      }
      console.log(response.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Decorative background */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4">
          {/* Decorative elements */}
          {Array(36)
            .fill()
            .map((_, i) => {
              const randomShape = Math.floor(Math.random() * 4);
              const size = Math.floor(Math.random() * 20) + 10;
              const opacity = Math.random() * 0.3 + 0.1;
              const shapes = [
                <div
                  key={i}
                  className={`rounded-full bg-white opacity-${
                    opacity < 0.2 ? "10" : opacity < 0.3 ? "20" : "30"
                  }`}
                  style={{ width: size, height: size }}
                />,
                <div
                  key={i}
                  className={`rounded-full bg-emerald-300 opacity-${
                    opacity < 0.2 ? "10" : opacity < 0.3 ? "20" : "30"
                  }`}
                  style={{ width: size, height: size }}
                />,
                <div
                  key={i}
                  className={`rounded-full bg-amber-400 opacity-${
                    opacity < 0.2 ? "10" : opacity < 0.3 ? "20" : "30"
                  }`}
                  style={{ width: size, height: size }}
                />,
                <div
                  key={i}
                  className={`rounded bg-emerald-600 opacity-${
                    opacity < 0.2 ? "10" : opacity < 0.3 ? "20" : "30"
                  }`}
                  style={{ width: size, height: size }}
                />,
              ];
              return shapes[randomShape];
            })}
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-center">
          <h2 className="text-white text-3xl font-bold mb-6">
            Let's become friends
          </h2>
          <p className="text-emerald-100 text-lg mb-12">
            No matter what experience you have. We will help you start earn in
            minutes.
          </p>
          <div className="flex space-x-2">
            <div className="h-1 w-8 bg-gray-300 rounded"></div>
            <div className="h-1 w-8 bg-white rounded"></div>
            <div className="h-1 w-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">
              Login to <span className="text-emerald-900">Petbnb</span>
            </h1>
            <p className="text-gray-500">Get your free Petbnb account now</p>
          </div>

          <form onSubmit={login}>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
            </div>

            <div className="mb-6 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <a href="#" className="text-emerald-500 hover:underline">
                Sign in
              </a>
            </p>
          </div>

          <div className="mt-10 flex justify-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM6 17.2C6 14.7 9.29 13.4 12 13.4C14.71 13.4 18 14.7 18 17.2V18H6V17.2Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
