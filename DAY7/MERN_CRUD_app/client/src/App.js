import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'


export default function App() {

  const [posts, setPosts] = useState([])

  const fetchPosts = () =>{
      axios
        .get(`${process.env.REACT_APP_API}/posts`)
        .then( response => {
          // console.log(response);
          setPosts(response.data)
        })
        .catch(err =>
          alert('Error occurred during fetching posts')
          )
  }

    useEffect(() => {
      fetchPosts()
    },[])

  return (

    <div className="container pb-5">
      <Nav/>
      <br/>
      <h1>
        MERN CRUD App
      </h1>
      <br/>
      {posts.map((post, i) => (
        <div className="row">
          <div className="col pt-3 pb-2">
            <h2>
              {post.title}
            </h2>
            <p className="lead">
              {post.content}
            </p>
            <p>
              Author <span className="badge">
                {post.user}
              </span> Published on {' '}
              <span className="badge">
                {new Date(post.createdAt).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
  ))}
    </div>
 
  )
}
