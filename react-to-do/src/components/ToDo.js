import React, { Component } from 'react';

class ToDo extends Component {
  

 deleteTodo(id) {
     this.props.deleteTodo(id);
   }

   render() {
     return (
<ul>
<input type="checkbox" checked={ this.props.isCompleted }
onChange={ this.props.toggleComplete } />
<span>{ this.props.description }</span>
<button onClick={(e)=> this.deleteTodo(this.props.id) } >remove</button>
</ul>

     );
   }
 }


 export default ToDo;
