"use client";

import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Process from "./components/Process";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string) => {
    if (text.trim() === "") return;
    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: Date.now(),
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: string, newText: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const progress =
    tasks.length === 0 ? 0 : Math.round((completedCount / tasks.length) * 100);

  return (
    <main className="w-full flex flex-col">
      <div className="justify-center item-center gap-2 flex flex-col w-full">
        <div className="max-w-2xl mx-auto w-full px-4">
          <h1 className="text-3xl font-bold mb-2">Danh sách công việc</h1>
          <p className="text-black mb-10">
            Quản lý và theo dõi tiến độ của bạn
          </p>

          <div className="mt-1">
            <Process progress={progress} />
          </div>

          <div className="mt-2">
            <TodoInput onAddTask={addTask} />
          </div>

          <div className="mt-2">
            <TodoList
              tasks={tasks}
              onDeleteTask={deleteTask}
              onEditTask={editTask}
              onToggleComplete={toggleComplete}
            />
          </div>

          {progress === 100 && tasks.length > 0 && (
            <p className="text-center text-black mt-6">
              Chúc mừng bạn đã hoàn thành tất cả công việc!
              <br />
              Hãy thêm nhiều công việc mới để tiếp tục nhé!
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
