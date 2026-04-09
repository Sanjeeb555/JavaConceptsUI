import { Code } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6">
      <div className="text-center space-y-6">

        <div className="flex items-center justify-center space-x-3">
          <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl shadow-xl animate-bounce">
            <Code size={40} className="text-white" />
          </div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Java Buddy
          </h1>
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          Welcome to Dashboard 🚀
        </h2>

        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Start learning Java from basics to advanced concepts like OOPS,
          Collections, and Interview Questions.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transition">
            <Link to="/dashboard/introduction">Start Learning</Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default DashboardHome;