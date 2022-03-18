//function component 
//rafce enter with es7 react extenction 

//import protypes, to restrict the type of title 
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({title,onShowTask,showAddTask}) => {
const location = useLocation();
const onClick =()=> console.log("click!")
  return (
  <header  className='header'>
      <h1>{title} </h1>
      
    {location.pathname === "/" && (<Button onClick={onClick} onShowTask={onShowTask} showAddTask={showAddTask}/>)}
    
  </header>
  )
}

Header.defaultProps={
    title:"Task Tracker"
}
Header.prototype={
    title: PropTypes.string
}

export default Header


//css tyle inside component 
// const headingStyle={
//     color:"red",
//     backgroundColor:"black"
// }




//class component rce

// import React, { Component } from 'react'

// export class Header extends Component {
//   render() {
//     return (
//       <header className='container'>
//           <div>Hello</div>
//       </header>
//     )
//   }
// }

// export default Header
