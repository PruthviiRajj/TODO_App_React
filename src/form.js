import React, { Component } from 'react';

class Form extends Component {
    state = { 

     } 

   

    render() { 
        return (
            <form className='form-in' onSubmit={this.props.fetch}>
                <label>Add Task</label><br></br>
                <input type='text' id='task' className='form-control'></input><br></br>
                <input type='submit' className='btn btn-dark'></input><br></br>
            </form>
            
        );
    }
}
 
export default Form;