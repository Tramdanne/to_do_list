import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-200 flex justify-center items-center gap-4 p-4 bg-sky-400/50 rounded-lg shadow-lg">
        <Image
          src="/img/todo.jpg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full aspect-square object-cover"
        />
        <h1 className="text-xl font-bold text-white text-shadow">TaskFlow</h1>
      </div>
    </div>
  );
}

export default Header;
