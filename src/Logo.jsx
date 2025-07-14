import React from 'react';
import { FaBookReader } from 'react-icons/fa';

function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <FaBookReader className="text-indigo-600 text-3xl" />

      <div className="leading-tight">
        <h1 className="text-xl font-semibold text-white">EducAfro</h1>
        <p className="text-sm text-indigo-500">Valorizando a educação inclusiva</p>
      </div>
    </div>
  );
}

export default Logo;