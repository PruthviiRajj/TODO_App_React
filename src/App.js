import React, { Component } from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Card from './card';
import Form from './form';
import Active from './ActiveItems';
import Completed from './CompletedItems';
import { computeHeadingLevel } from '@testing-library/react';

class App extends Component {
    state = { 
        Task:[]
     }
    fetch(e){
        let task = document.querySelector('#task').value;
        document.querySelector('#task').value = '';
        let allTask = this.state.Task;
        allTask.push({id:Date.now(),Title:task,Status: 0});
        this.setState({Tasks:allTask})
        console.log({Task:allTask})
        e.preventDefault();
    }
    done(id){
        let allTask = this.state.Task;
        
        let itemindex;

        allTask.forEach(function(item,index){
            if(item.id === id){
                itemindex = index;
            }    
        })
        allTask[itemindex].Status = 1;
        this.setState({Task:allTask});
        console.log(this.state.Task);
    }

    cross(e,id){
        let allTask = this.state.Task;
        
        let itemindex;

        allTask.forEach(function(item,index){
            if(item.id === id){
                itemindex = index;
            }    
        })
        allTask.splice(itemindex,1);
        this.setState({Task:allTask});
        e.preventDefault();
    }

    
    
    render() { 
        return (
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    {/* <div className='col-3'><Card title='first' img='https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
                    <div className='col-3'><Card title='second' img='https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
                    <div className='col-3'><Card title='Third' img='https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
                    <div className='col-3'><Card title='fourth' img='https://images.pexels.com/photos/354939/pexels-photo-354939.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>                     */}
                    <Form fetch={this.fetch.bind(this)}/>
                </div>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <h3>Active Task</h3>
                        <Active items={this.state.Task} done={this.done.bind(this)}/>
                    </div>
                    <div className='col-6'>
                        <h3>Completed Task</h3>
                        <Completed items={this.state.Task} cross={this.cross.bind(this)}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default App;