import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import { Link } from 'react-router-dom'


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
      <hr/>
      {posts.map((post, i) => (
        <div className="row" key = {post._id} style = {{ borderBottom: '1px solid silver' }}>
          <div className="col pt-3 pb-2">
            <Link to={`/post/${post.slug}`}>
              <h2>
                {post.title}
              </h2>
            </Link>
            <p className="lead">
              {post.content.substring(0, 100)}
            </p>
            <p>
              Author <span className="badge bg-light text-dark">
                {post.user}
              </span> Published on {' '}
              <span className="badge bg-secondary">
                {new Date(post.createdAt).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
  ))}
    </div>
 
  )
}
