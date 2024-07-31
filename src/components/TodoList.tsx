import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
