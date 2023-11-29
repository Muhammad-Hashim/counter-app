import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
function App() {


   const [count, setCount] = useState(0);

   // Event handler to increment the count
   const increment = () => {
     setCount(count + 1);
   };

   // Event handler to decrement the count
   const decrement = () => {
     setCount(count - 1);
   };
  return (
    <div className="container mx-auto mt-48 text-center">
      <h1 className="text-4xl font-bold mb-4">Counter App</h1>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="flex justify-center ">
        <button
          className="bg-green-500 text-white px-4 py-2 mr-4 rounded"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
