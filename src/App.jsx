import React from "react";
import { useRecoilValue } from "recoil";
import { TodoList } from "./atoms/TodoAtoms";

const App = () => {
  const todos = useRecoilValue(TodoList); // Retrieve todo list from Recoil

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo List</h1>
      <div className="space-y-4">
        {todos.map((todo) => (
          <TodoApp
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </div>
    </div>
  );
};

const TodoApp = ({ id, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-80 border border-gray-200">
      <div className="text-lg font-semibold text-gray-700">#{id}</div>
      <div className="text-xl font-bold text-gray-900 mt-2">{title}</div>
      <div className="text-gray-600 mt-1">{description}</div>
    </div>
  );
};

export default App;
