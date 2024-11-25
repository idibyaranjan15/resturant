import { Link } from "react-router";

const App = () => {
  console.log(
    "App component rendered. Provides navigation to Card and uses React Router DOM."
  );

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-yellow-400">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to the App</h1>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        <Link to="/card" className="text-white no-underline">
          Go to Card Page
        </Link>
      </button>
    </div>
  );
};

export default App;
