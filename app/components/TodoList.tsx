"use client";

import React from "react";
import TodoItem from "./TodoItem";
import { Task } from "../page";

interface TodoListProps {
  tasks: Task[];
  onEditTask: (id: string, newText: string) => void;
  onDeleteTask: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

export default function TodoList({
  tasks,
  onEditTask,
  onDeleteTask,
  onToggleComplete,
}: TodoListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-white text-lg">
          Hãy thêm công việc mới để bắt đầu quản lý danh sách của bạn!
        </p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}
