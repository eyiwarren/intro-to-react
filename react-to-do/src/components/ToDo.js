import React, { Component } from 'react';

 class ToDo extends Component {
   constructor(props) {
    super(props);
  }

  removeTodo(index) {
  this.props.deleteTodo(index);
  }

   render() {
     return (

       <li>
         <input type="checkbox" checked={ this.props.isCompleted }
         onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         </li>
         <button onClick={(e)=> this.deleteTodo(this.props.index) }>
         remove</button>{this.props.todo.description}

     );
   }
 }

 export default ToDo;
