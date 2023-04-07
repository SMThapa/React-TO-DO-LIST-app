export const Body = ({taskList, setTaskList, task, setTask}) => {

  const handleEdit = (id) =>{
    const updatTask = taskList.find(tsk => id === tsk.id)
    setTask(updatTask)
    document.documentElement.scrollTop = 0;
  }
  const handleDelete = (id) =>{
    const updatedList = taskList.filter(task => task.id!==id)
    setTaskList(updatedList);
    setTask({})
    // task.id === id ? setTask({}): task;
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    

    if(task.id){
      const date = new Date();
      const updatedTask = taskList.map((elm) =>(
        elm.id === task.id ? {id:task.id, name:task.name, date: `${date.toLocaleTimeString()}`}: elm
      ))
      setTaskList(updatedTask)
      setTask({})
    }else{
      const date = new Date();
      const newTask = {
        id: date,
        name: e.target.task.value,
        date: `${date.toLocaleTimeString()}`
      }
      
      console.log(newTask)
      setTaskList([...taskList, newTask])
      setTask({})
    }
  }

  return (
   <div className="body">
    <div className="inputDiv">
      <form onSubmit={handleSubmit}>
        <input type="text" name='task' value={task.name ||""} placeholder="add-task" autoComplete="off" onChange={e => setTask({...task, name:e.target.value})} required/>
        <button className="btn-submit">{task.id ? "Update":"Add"}</button>
      </form>
    </div>

    <div className="outputDiv">
      <ul>
        <span className="topsection">
          <button onClick={()=> {setTaskList([]); setTask({})}} className="btn-clearList">Clear all</button>
          <span className="count">{taskList.length}</span>
        </span>
        <div className="card-items">
          {taskList.map(elm =>(
            <li key={elm.id}>
              <p>
                <span className="task">{elm.name} </span>
                <span className="time">{elm.date}</span>
              </p>
              <div className="buttons">
                <button onClick={() => handleEdit(elm.id)} style={{backgroundColor:'#778da9', color:"white", cursor:'pointer'}}>Edit</button>
                <button onClick={() => handleDelete(elm.id)} style={{backgroundColor:'#bc4749', color:"white", cursor:'pointer'}}>Delete</button>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>

   </div>
  )
}
