"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { getTodos, addTodo, deleteTodo, updateTodo } from "@/utils/todoService";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTodos = await getTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData();
  }, []);

  const handleAddTodo = async (newTodo) => {
    try {
      await addTodo(newTodo);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      await updateTodo(updatedTodo);
      const updatedTodos = await getTodos();
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <Layout
      todos={todos}
      onAddTodo={handleAddTodo}
      onDeleteTodo={handleDeleteTodo}
      onUpdateTodo={handleUpdateTodo}
    />
  );
}