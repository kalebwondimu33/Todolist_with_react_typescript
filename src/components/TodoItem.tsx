// src/components/TodoItem.tsx
import React, { useState } from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
