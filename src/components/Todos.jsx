import { useRecoilState } from "recoil";
import { todoState } from "../state/atoms/TodoState";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useRecoilState(todoState);
  const [inputText, setInputText] = useState("");

  // Function to add a new todo
  const handleAddTodo = () => {
    const trimmedText = inputText.trim();

    if (!trimmedText) {
      alert("Please enter a valid todo.");
      return;
    }

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(), // Use Date.now() for unique IDs
        title: trimmedText,
      },
    ]);
    setInputText(""); // Clear the input field after adding
  };

  // Function to clear all todos
  const handleClearTodos = () => {
    if (todos.length === 0) {
      alert("No todos to clear.");
      return;
    }
    const confirmation = window.confirm(
      "Are you sure you want to clear all todos?"
    );
    if (confirmation) {
      setTodos([]);
    }
  };

  // Function to remove a specific todo by ID
  const handleRemoveTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); // Remove by ID
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
        Todo List
      </h2>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Add your todo..."
          className="flex-1 border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          aria-label="Todo input field"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleAddTodo}
          aria-label="Add todo"
        >
          Add
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={handleClearTodos}
          aria-label="Clear todos"
        >
          Clear
        </button>
      </div>

      <div className="mt-6">
        {todos.length === 0 ? (
          <div className="text-center text-gray-500">
            No todos yet! Add a new todo to get started.
          </div>
        ) : (
          todos.map((item) => (
            <div
              key={item.id}
              className="border-b py-2 flex justify-between items-center"
            >
              <div className="font-medium text-gray-800">{item.title}</div>
              <div className="text-sm text-gray-500">ID: {item.id}</div>
              <div
                className="text-center text-base font-extrabold cursor-pointer px-2 py-1 bg-red-500 hover:bg-red-700 text-white rounded-full"
                onClick={() => handleRemoveTodo(item.id)} // Pass the `id` to the function
              >
                -
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;
