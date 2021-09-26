import React, { useState } from 'react'
// import { BrowserRouter as Router} from "react-router-dom";


export default function Create() {
    const [state, setState] = useState({
        title: '',
        content: '',
        user: ''
    })

    
    // destructure values from state
    function handleChange(evt) {
        const value = evt.target.value;
        console.log('name',evt.target.name,'value',value)
        setState( {
            ...state,
            [evt.target.name] : value
        })
}
    const {title, content, user} = state
    
  return (

    <div className="container p-5">
      <h1>CREATE POST</h1>
      <br />
      {JSON.stringify(state)}
      <form>
            <div className="form-group mb-3">
                <label 
                    htmlFor="title" 
                    className="text-muted">
                        Title
                </label>
                <input 
                    onChange = {handleChange}
                    value = {title}
                    name="title"
                    type="text" 
                    className="form-control" 
                    placeholder="Post Title" 
                    required/>
            </div>

            <div className="form-group mb-3">
                <label 
                    htmlFor="Content" 
                    className="text-muted">
                        Content
                </label>
                <textarea 
                    onChange = {handleChange}
                    value = {content}
                    type="text" 
                    className="form-control" 
                    placeholder="Write something..." 
                    name="content"
                    required >
                
                </textarea>
            </div>

            <div className="form-group mb-3">
                <label 
                    htmlFor="User" 
                    className="text-muted">
                        User
                </label>
                <input 
                    onChange = {handleChange}
                    value = {user}
                    name="user"
                    type="text" 
                    className="form-control" 
                    placeholder="username" 
                    required/>
            </div>

            <div mb-3>
                <button 
                className="btn-primary">
                    Create
                </button>
            </div>
      </form>
    </div>
 
  )
}
