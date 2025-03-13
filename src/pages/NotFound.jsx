import { Link } from 'react-router-dom';
import { PawPrint as Paw } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <Paw className="h-16 w-16 text-rose-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 text-center max-w-md mb-8">
        Oops! It looks like the page you're looking for has gone for a walk. Let's get you back on track.
      </p>
      <Link 
        to="/" 
        className="bg-rose-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-rose-600 transition duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;