"use client";

export const getTodosFromLocalStorage = () => {
  try {
    const todosString = localStorage.getItem("todos");
    if (todosString) {
      return JSON.parse(todosString);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error retrieving todos from localStorage:", error);
    return [];
  }
};

export const saveTodosToLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos to localStorage:", error);
  }
};