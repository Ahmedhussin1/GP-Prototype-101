import React from "react";
import { useLocation } from "react-router-dom";
function AddingProblems() {
  const location = useLocation();
  const data = location.state;
  return (
    <div>
      <div className="container mx-auto max-w-xl my-20">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.contestName}
          </h5>
          <p>
            {data.contestDuration} {data.contestDurationType}
          </p>
          <p>{data.contestDate}</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {data.contestDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddingProblems;
