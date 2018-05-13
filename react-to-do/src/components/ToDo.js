import React, { Component } from 'react';

 class ToDo extends Component {

     render() {
     return (
       <ul>
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
         </li>
         { this.state.todos.map((todo, index) => {
          return <li onClick={(e) => { this.deleteToDo(index)}} key={todo}>{ todo }</li>
            })}
         </ul>
     );

   }
 }


 export default ToDo;
