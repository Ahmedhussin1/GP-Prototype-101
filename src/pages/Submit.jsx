import React from "react";
import { useLocation } from "react-router-dom";
import { problemsData } from "../problemsData";

function Submit() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path)
  const data = problemsData[path-1];
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="mx-auto text-center mt-10 mb-10">
        <h1 className="text-lg ">
          submitting <span className="text-xl text-red-400">{data.name}</span>
        </h1>
      </div>

      <div className="mx-auto items-center mb-10">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Code
        </label>
        <textarea
          id="message"
          rows="20"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea> 
      </div>
      <div>
        <button className="bg-blue-300 px-2 py-1 rounded-lg text-white">Submit</button>
      </div>
    </div>
  );
}

export default Submit;
