import React from 'react'
import { Link } from 'react-router-dom';
import Cards from '../component/Cards';
import {posts} from '../data'
function Contests() {
  return (
    <div className="">
      {posts.map((post) => (
        <Cards key={post.id} post={post}/>
      ))}
    </div>
  );
}

export default Contests