import React from 'react'
// import { BrowserRouter as Router} from "react-router-dom";


export default function Create() {
  return (

    <div className="container p-5">
      <h1>CREATE POST</h1>
      <br />
      <form>
            <div className="form-group mb-3">
                <label htmlFor="title" className="text-muted">Title</label>
                <input type="text" className="form-control" placeholder="Post Title" required/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="Content" className="text-muted">Content</label>
                <textarea type="text" className="form-control" placeholder="Write something" required name="content-textarea"></textarea>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="User" className="text-muted">User</label>
                <input type="text" className="form-control" placeholder="username" required/>
            </div>
            <div mb-3>
                <button className="btn-primary">Create</button>
            </div>
      </form>
    </div>
 
  )
}
