import React, { useState } from "react";

interface TodoInputProps {
  onAddTask: (text: string) => void;
}

export default function TodoInput({ onAddTask }: TodoInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    onAddTask(input);
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-row justify-center items-center w-full gap-6">
      <input
        type="text"
        placeholder="Thêm công việc mới..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1 bg-white border border-sky-400 rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
      />
      <button
        onClick={handleSubmit}
        className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
      >
        <span>+</span>
        Thêm
      </button>
    </div>
  );
}
