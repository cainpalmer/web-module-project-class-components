import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: '',
        }
    }
    
    render() {
        return (
            <form onSubmit = {this.props.handleSubmit}>
                <label>New Task</label>
                <input name = 'todo' type = 'text' onChange = {this.handleChanges} value = {this.newTask} />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;