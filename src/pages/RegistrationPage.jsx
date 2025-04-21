import React, {useState} from 'react';
import {EyeIcon, EyeOffIcon} from 'lucide-react';

const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '', username: '', password: '', address: ''
    });
    const [agreed, setAgreed] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle registration logic here
    };

    return (<div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left side - Decorative background */}
        <div className="hidden lg:block lg:w-1/2 bg-emerald-800 relative">
            {/* Grid background with shapes */}
            <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }}>
                {/* Decorative shapes */}
                <div className="absolute top-20 left-20 w-10 h-10 bg-white rotate-45 opacity-20"></div>
                <div className="absolute top-40 right-40 w-24 h-24 rounded-full bg-emerald-600 opacity-30"></div>
                <div className="absolute bottom-40 left-60 w-32 h-32 rounded-full bg-white opacity-10"></div>
                <div className="absolute top-60 left-1/2 w-16 h-16 rounded-full bg-amber-400 opacity-20"></div>
                <div className="absolute bottom-20 right-20 w-20 h-20 rounded-full bg-emerald-300 opacity-30"></div>
                <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-white opacity-20"></div>
                <div
                    className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full bg-emerald-700 opacity-20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center w-full h-full p-12 text-center">
                <h2 className="text-white text-3xl font-bold mb-6">Learn and Practice</h2>
                <p className="text-emerald-100 text-lg mb-12">
                    No matter what experience you have. We will help you start coding in minutes.
                </p>
                <div className="flex space-x-2">
                    <div className="h-1 w-8 bg-gray-300 rounded"></div>
                    <div className="h-1 w-8 bg-white rounded"></div>
                    <div className="h-1 w-8 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>

        {/* Right side - Registration form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 bg-white">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-end mb-8">
                    <div className="text-emerald-600 font-semibold flex items-center">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z"
                                fill="currentColor"/>
                        </svg>
                        Petbnb
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-2">Register to <span
                        className="text-emerald-900">Petbnb</span></h1>
                    <p className="text-gray-500">Get your free Petbnb account now</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
                            required
                        />
                    </div>

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
                            {showPassword ? <EyeOffIcon size={20}/> : <EyeIcon size={20}/>}
                        </button>
                    </div>

                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                            className="h-4 w-4 border border-gray-300 rounded mr-2"
                            required
                        />
                        <label htmlFor="terms" className="text-gray-500 text-sm">
                            I agree to all the term and condition.
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition duration-300"
                        disabled={!agreed}
                    >
                        Register
                    </button>
                </form>

                {/* Sign in link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-500">
                        Already have an account?{" "}
                        <a href="#" className="text-emerald-500 hover:underline">Sign in</a>
                    </p>
                </div>

                {/* Social links */}
                <div className="mt-10 flex justify-center space-x-8">
                    <a href="#" className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 7C13.66 7 15 8.34 15 10C15 11.66 13.66 13 12 13C10.34 13 9 11.66 9 10C9 8.34 10.34 7 12 7ZM6 17.2C6 14.7 9.29 13.4 12 13.4C14.71 13.4 18 14.7 18 17.2V18H6V17.2Z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>);
};

export default RegistrationPage;