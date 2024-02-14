import React, { Component } from 'react';

class Active extends Component {
    state = {  } 
    render() { 
        let tasks = this.props.items;
        return (
            tasks.map((item,index) => {
                if(item.Status === 0){
                    return <div key={index} className='card mt-3'>
                            <div className='card-body'>
                                <h5><input type='checkbox' onChange={() => this.props.done(item.id)}></input><span className='p-3'>{item.Title}</span></h5>
                            </div>
                        </div>
                }
                
            })
            
        );
    }
}
 
export default Active;