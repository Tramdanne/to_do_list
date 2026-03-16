import React from "react";

interface ProcessProps {
  progress: number;
}

export default function Process({ progress }: ProcessProps) {
  return (
    <div className="rounded-xl">
      <p className="text-black mb-2 text-border">Tiến độ</p>
      <div className="flex items-center gap-4">
        <p className="text-2xl font-bold text-black">{progress}%</p>
        <div className="flex-1 bg-sky-600/50 rounded-full h-2">
          <div
            className="bg-sky-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
