import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todoList=[
    {
    task: 'Morning Tea',
    id: 482,
    completed: false
  },

  {
    task: 'Breakfast',
    id: 2554422,
    completed: false
  },

  {
    task: 'Study',
    id: 1345,
    completed: false
  },

  {
    task: 'Lunch',
    id: 16354,
    completed: false
  },

  {
    task: 'Shopping',
    id: 454,
    completed: false
  },
  {
    task: 'Dinner',
    id: 843,
    completed: false
  }
];

class App extends React.Component {
 constructor(){
   super();
   this.state={
     todoList:todoList
   };
 }

 addTodo=todoItem=>{
   this.setState({
     todoList:[
     ...this.state.todoList,
     {
       task:todoItem  ,
       id:Date.now(),
       completed:false
     }
     ]
   });
 };

 toggleCompleted = todoId => {
   console.log('todoId',todoId)
  this.setState({
    todoList: this.state.todoList.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  });
};

clearCompleted = () => {
  this.setState({
    todoList: this.state.todoList.filter(todo => {
      return !todo.completed;
    })
  });
};


  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to Priyanka's Todo App!</h2>
         </div>
         <TodoForm addTodo={this.addTodo}/><br/>
        <TodoList todoList={this.state.todoList} toggleCompleted={this.toggleCompleted} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
