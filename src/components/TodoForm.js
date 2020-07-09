import React from 'react';



class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todo:" "
        }
    
    };
    handleChanges=e=>{
        console.log('e.target.value', e.target.value);
    
    this.setState({todo:e.target.value })
     };

     handleSubmit=e=>{
         e.preventDefault();
         this.props.addTodo(this.state.todo);
     };

render() {
    return(
        
        <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter to-do" name="todo" value={this.state.todo} onChange={this.handleChanges}/>
            <button>Add Todo</button><br/>
            
        </form>
    );
}
}

export default TodoForm;