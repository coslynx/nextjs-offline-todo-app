"use client";

import { getTodosFromLocalStorage, saveTodosToLocalStorage } from "./localStorage";

export const getTodos = async () => {
  try {
    const todos = getTodosFromLocalStorage();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const addTodo = async (newTodo) => {
  try {
    const todos = getTodosFromLocalStorage();
    const id = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = { id, ...newTodo };
    todos.push(todo);
    saveTodosToLocalStorage(todos);
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const todos = getTodosFromLocalStorage();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    saveTodosToLocalStorage(updatedTodos);
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

export const updateTodo = async (updatedTodo) => {
  try {
    const todos = getTodosFromLocalStorage();
    const index = todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      todos[index] = updatedTodo;
      saveTodosToLocalStorage(todos);
    }
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};