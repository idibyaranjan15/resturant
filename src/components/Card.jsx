import { Link } from "react-router"; // Correct import
import { useRecoilValue, useSetRecoilState } from "recoil";
import { valueState } from "../atoms/atoms";

const Card = () => {
  const value = useRecoilValue(valueState); // Read the current value
  const setValue = useSetRecoilState(valueState); // Get the setter function
  const ran = Math.floor(Math.random() * 9 + 1);
  const handleAdd = () => {
    console.log("Adding 2 to the current Recoil state value.");
    setValue((v) => v + ran);
  };

  console.log(
    "Card component rendered. Displays and modifies the Recoil state."
  );

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-400">
      <h2 className="text-3xl font-semibold text-white mb-4">Card Page</h2>
      <div className="text-xl font-medium text-white mb-4">
        Current Value: {value}
      </div>
      <button
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition mb-4"
        onClick={handleAdd}
      >
        Add randm value
      </button>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        <Link to="/temp" className="text-white no-underline">
          Go to Template Page
        </Link>
      </button>
    </div>
  );
};

export default Card;
