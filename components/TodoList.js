"use client";

import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
  return (
    <ul className="mt-4 space-y-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
      {!todos.length && (
        <li className="text-gray-500 text-center">No todos yet!</li>
      )}
    </ul>
  );
}