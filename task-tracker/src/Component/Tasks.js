//  
import Task from "./Task"
//setTasks used to change state 
 const Tasks = ({tasks,onDelete,onToggle}) => {
 
  return (
    <>
    {tasks.map((ele, i)=>(
    <Task key={i} task={ele} 
    onDelete={onDelete}
     onToggle={onToggle}/>
    ))}
    </>
  )
}

export default Tasks