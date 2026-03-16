"use client";

import React, { useState } from "react";
import { Task } from "../page";

interface TodoItemProps {
  task: Task;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

export default function TodoItem({
  task,
  onEdit,
  onDelete,
  onToggleComplete,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSave = () => {
    if (editText.trim() === "") return;
    onEdit(task.id, editText.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    }
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <>
      {!isEditing ? (
        <div className="group flex items-center gap-3 bg-white border border-sky-800 p-4 rounded-xl mb-3 hover:border-zinc-400 transition-all">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
              task.completed
                ? "bg-sky-500 border-sky-600 cursor-pointer"
                : "border-sky-600 cursor-pointer hover:border-sky-500"
            }`}
          >
            {task.completed && <span className="text-white text-xs">✓</span>}
          </button>

          <span
            className={`flex-1 transition-all ${
              task.completed ? "text-black line-through" : "text-black"
            }`}
          >
            {task.text}
          </span>

          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-400 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm transition-all"
            >
              Sửa
            </button>
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-red-600 hover:bg-red-400 text-white px-3 py-1 rounded text-sm transition-all"
            >
              Xóa
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3 bg-sky-600/50 border border-sky-400 p-4 rounded-xl mb-3 transition-all">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-white border border-sky-500 rounded px-3 py-2 text-black focus:outline-none"
            autoFocus
          />
          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-400 text-white px-3 py-2 rounded text-sm transition-all"
          >
            Lưu
          </button>
          <button
            onClick={handleCancel}
            className="bg-sky-600 hover:bg-sky-500 text-white px-3 py-2 rounded text-sm transition-all"
          >
            Hủy
          </button>
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white border rounded-lg p-6 max-w-sm mx-4">
            <p className="text-black mb-6">
              Bạn chắc chắn muốn xóa "{task.text}" không?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-sky-600 hover:bg-sky-400 text-white px-4 py-2 rounded transition-all"
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-400 text-white px-4 py-2 rounded transition-all"
              >
                Có, xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
