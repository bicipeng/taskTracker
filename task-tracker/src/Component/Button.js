import PropTypes from "prop-types"


const Button = ({color,onShowTask,showAddTask}) => {


    return (
        <button className='btn' 
     
        onClick={onShowTask}
        style={{backgroundColor: showAddTask ? 'red' :'green'}}>
            {showAddTask? "Close":"Add"}
        </button>
    )
}



Button.defaultProps={
    color:"steelblue",
 
}
  
Button.propType={
    text: PropTypes.string,
}


export default Button