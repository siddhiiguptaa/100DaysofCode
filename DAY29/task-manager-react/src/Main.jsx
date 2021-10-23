import React,{ useState } from 'react'

export default function Main() {

    const [taskName, setTaskName] = useState('')
    const [taskList, setTaskList] = useState([])

    function addTask(){
            setTaskList([...taskList, taskName])
    }

    const taskListContent = taskList.map((task)=>{
        return (
            <div>
                <p>
                    {task}
                </p>
                <button>
                    delete
                </button>
            </div>
        )
    })
    return (
        <div 
            className="row justify-content-center"
            >
            <div 
                className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded"
                >
                <h1>
                    The task Scheduler
                </h1>
                <input 
                    type="text" 
                    placeholder="Click to add your task" 
                    className="form-control"
                    value={taskName}
                    onChange={(e) => {setTaskName(e.target.value)}}
                    />
                <button 
                    type="button" 
                    class="btn btn-success" 
                    data-bs-toggle="tooltip" 
                    data-bs-placement="start" 
                    title="ADD"
                    onClick={addTask}
                    >
                    ADD
                </button>
                <br />
                {taskListContent}
            </div>
            
        </div>
    )
}
