import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-sky-900 text-white text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-40 py-2">
        <p className="mb-2 md:mb-0">
          Made by
          <span className="text-yellow-200"> Ankit</span>
        </p>

        <div className="flex items-center">Copyright © 2024 Ankit Inc.</div>
      </div>
    </footer>
  );
}
