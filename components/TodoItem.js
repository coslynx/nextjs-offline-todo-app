"use client";

import { useState } from "react";
import { deleteTodo, updateTodo } from "@/utils/todoService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const updatedTodo = {
        id: todo.id,
        title: editedTitle,
        description: editedDescription,
      };
      await updateTodo(updatedTodo);
      onUpdateTodo(updatedTodo);
      setIsEditing(false);
      toast.success("Todo updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Failed to update todo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error updating todo:", error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteTodo(todo.id);
      onDeleteTodo(todo.id);
      toast.success("Todo deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Failed to delete todo!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 rounded-md shadow-md bg-white">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mt-2"
          />
          <button
            onClick={handleSaveClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">{todo.title}</h3>
            <p className="text-gray-600">{todo.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleEditClick}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </div>
        </>
      )}
      <ToastContainer />
    </li>
  );
}