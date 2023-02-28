import React from 'react'
import { useLocation } from 'react-router-dom'
import { posts } from '../data';
import { problemsData } from '../problemsData'
function ProblemStatement() {
    // 
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const data = problemsData.find((p) => p.id.toString() === path);

  return (
    <div>
      <div className="bg-slate-500 flex flex-col ">
        <h1>{data.name}</h1>
        <p>time limit per test: {data.problem.timeLimit}</p>
        <p>memory limit per test: {data.problem.memoryLimit}</p>
        <p>input: {data.problem.input}</p>
        <p>output: {data.problem.output}</p>
      </div>

      <h1>{data.problem.statement}</h1>
    </div>
  );
}

export default ProblemStatement