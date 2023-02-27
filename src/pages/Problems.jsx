import React from 'react'
import { useLocation } from 'react-router-dom'
import {posts} from '../data'
function Problems() {
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const post = posts.find(p=>p.id.toString() === path)
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.longDesc}</p>
    </div>
  )
}

export default Problems