import { useRecoilState } from "recoil";

import { valueState } from "../atoms/atoms";

const Template = () => {
  const [value] = useRecoilState(valueState);
  let flag = false;
  if (value % 2 == 0) {
    flag = true;
  }

  console.log(
    "Template component rendered. Uses the context value to calculate a new value."
  );

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-purple-500">
      <h2 className="text-3xl font-semibold text-white mb-4">Template Page</h2>
      <div className="text-xl font-medium text-white">
        Calculated Value: {value + 4}
      </div>

      {flag && (
        <div className="text-xl font-medium text-blue-500">
          {" "}
          the value is even
        </div>
      )}
    </div>
  );
};

export default Template;
