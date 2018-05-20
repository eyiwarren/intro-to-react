import React, { Component } from 'react';
 import './App.css';
 import ToDo from './components/ToDo.js';

 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
    { id: 1, description: 'Walk the cat', isCompleted: true },
    { id: 2, description: 'Throw the dishes away', isCompleted: false },
    { id: 3, description: 'Buy new dishes', isCompleted: false }
  ],
        newTodoDescription: '',

     };

     this.deleteTodo = this.deleteTodo.bind(this);
     this.toggleComplete = this.toggleComplete.bind(this)
   }

     handleChange(e) {
        this.setState({ newTodoDescription: e.target.value })
      }

   handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newTodoDescription) { return }
        const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
      }

   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });

  }

  deleteTodo (id) {

  this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    });
  }


   render() {

     return (
      
       <div className="App">
         <ul>
          { this.state.todos.map( (todo, id) =>
            <ToDo key={ todo.id } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(id) }
            id={todo.id} todos={this.state.todos} deleteTodo={this.deleteTodo} />
          )}

        </ul>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
         <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
         <input type="submit" />
       </form>
     </div>
    );
   }
 }

export default App;
