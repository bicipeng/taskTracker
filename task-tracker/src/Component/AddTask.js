import { useState } from "react"
export default function AddTask({onAddTask,onShowTask }) {

    const[text,setText] = useState(''); 
    const[date,setDate] = useState(''); 
    const[reminder,setReminder] = useState(false); 
    
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!text){
            alert('Please add a task');
            return ;
        }

        //past text, date, reminder as a param to onAddTask
        onAddTask({text,date,reminder});

        //reset the state after added 

        setDate("");
        setReminder(false);
        setText("");
    }


  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>
                Task
            </label>  
         <input type='text' placeholder="Add Task" 
         value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>
                Date & Time
            </label>  
         <input type='text' placeholder="Add Date and time"
         value={date} onChange={(e)=> setDate(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>
                Set Remider
            </label>  
         <input type='checkbox'
         checked ={reminder}
         value={reminder} 
         onChange={(e)=> setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Save Task' className="btn btn-block"/>
    </form>
  )
}
