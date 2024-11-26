import React from "react";
import Todos from "./components/Todos";
import { RecoilRoot } from "recoil";
const App = () => {
  return (
    <RecoilRoot>
      <div className="min-h-screen bg-gray-100 flex  justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
            Welcome to Todo App
          </h1>
          <Todos />
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;
