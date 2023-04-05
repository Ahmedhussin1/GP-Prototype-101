import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import TimeField from "react-simple-timefield";
import AddingProblems from "./AddingProblems";
function Admin() {
  const [contestName, setContestName] = useState("");
  const [contestDate, setContestDate] = useState("");
  const [contestDuration, setContestDuration] = useState("");
  const [contestDurationType, setContestDurationType] = useState("Hours");
  const [contestDescription, setContestDescription] = useState('')
  const submitHandler = (e) => {
    e.preventDefault();
    const createContestData = {
      contestName,
      contestDate,
      contestDuration,
      contestDurationType,
      contestDescription
    };
    console.log(createContestData);
  };
  return (
    <div>
      <div className="container mx-auto max-w-xl my-20">
        <p className="mb-5 text-2xl">Create Contest</p>
        <form onSubmit={submitHandler}>
          {/* setting contest starting time */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="date"
              value={contestDate}
              onChange={(e) => setContestDate(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Contest date
            </label>

            <TimeField className="" />
          </div>

          {/* setting contest duration */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              value={contestDuration}
              onChange={(e) => setContestDuration(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contest Duration
            </label>
            <select
              value={contestDurationType}
              onChange={(e) => setContestDurationType(e.target.value)}
              className=""
            >
              <option value="hour">Hours</option>
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
            </select>
          </div>

          {/* counter to set problems number */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="name"
              value={contestName}
              onChange={(e) => {
                setContestName(e.target.value);
              }}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              type="text"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Contest Name
            </label>
          </div>
          {/* text area div */}
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              value={contestDescription}
              onChange={(e) => setContestDescription(e.target.value)}
              id="description"
              rows="10"
              className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter a brief description about the contest"
            ></textarea>
          </div>
          {/* button dev */}

          <Link
            state={{
              contestName: contestName,
              contestDate: contestDate,
              contestDuration: contestDuration,
              contestDurationType: contestDurationType,
              contestDescription: contestDescription,
            }}
            to="/addingProblems"
          >
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default Admin;
