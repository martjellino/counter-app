'use client';

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-indigo-100">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow justify-center">
        <h1 className="flex mb-3 font-semibold text-4xl text-gray-700 items-center justify-center">
          Counter App
        </h1>
        <h1 className="flex my-10 font-semibold text-4xl text-gray-700 items-center justify-center">
          {count}
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={decrement}
            className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300"
          >
            Decrease
          </button>
          <button
            type="button"
            onClick={increment}
            className="items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300"
          >
            Increase
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-3 py-2 mt-3 text-sm font-medium text-center text-white bg-fuchsia-700 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
