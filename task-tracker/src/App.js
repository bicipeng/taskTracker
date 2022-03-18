
import Header  from './Component/Header';
import Tasks  from './Component/Tasks';
import AddTask from './Component/AddTask';
import Footer from './Component/Footer';
import About from './Component/About';

import { useState,useEffect } from "react";
import{BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  const[showAddTask, setShowTask]=useState(false);
  const [tasks, setTasks]= useState([
    {id:1,
text:"Food Shopping",
date:'Feb 5th at 2:30 PM',
reminder:false
},
{id:2,
text:"Meeting a friend",
date:'Feb 5th at 4:00 PM',
reminder:false
}
])

//load the task from mock backend and display 
useEffect(()=>{
const getTasks = async ()=>{
  const taksFromServer = await fetchTasks();
  setTasks( taksFromServer)
} 
  getTasks();
  //empty arr is the dependency arr
},[])
const url = 'http://localhost:5000/tasks' ;

//fetch data from mockbackend 
const fetchTasks = async() =>{
  const res = await fetch(url)
  const data = await res.json();
return data;
  
}

//fetch task based on id
const fetchTask = async(id) =>{
  const res = await fetch(`${url}/${id}`)
  const data = await res.json();
return data;
  
}


//add task
const addTask = async task =>{
  // const id = Math.floor(Math.random() *10)+1;
  // setTasks([  ...tasks,
  //  { text:task.text,
  //   date:task.date,
  //   reminder:task.reminder,
  //   id:id}]
  
  // )
  const res = await fetch(url, {method:'POST', headers:{'Content-type':"application/json"}, body:JSON.stringify(task)} )
  const data = await res.json();
  setTasks([...tasks, data]);
}
//delet task 
const deleteTask = async id =>{
  //delete taks in the mock server 
await fetch(`${url}/${id}`, 
{method:"Delete"})
 setTasks(tasks.filter((task)=>task.id!== id))
}
//toggle Remider 
const toggleRemider = async id =>{

  const taskToToggle = await fetchTask(id);
  const updateTast ={...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`${url}/${id}`, {method:'PUT', headers:{
    'Content-type': 'application/json'}, body: JSON.stringify(updateTast)})

    const data = await res.json();
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !data.reminder}:task))
}

//show Add Task form  can define the function when passing it down 
//since it is a simple one
// const toggleAddTask = ()=>{
//   setShowTask({...setShowTask, setShowTask:!setShowTask});
// }
  return (
<Router>

    <div className="container">
      <Header onShowTask={()=>setShowTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAddTask={addTask} />}
      {tasks.length>0 ?
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemider}/>) :('No Task to show') }
        <Routes>
      <Route path="/about" element = {<About/>}/>
       </Routes>
      <Footer/>
    </div>
   
</Router>
  );
}

export default App;
