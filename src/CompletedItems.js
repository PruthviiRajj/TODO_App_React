import React, { Component } from 'react';


class Complet extends Component {
    state = {  } 
    render() { 
        let tasks = this.props.items;
        return (
            tasks.map((item,index) => {
                if(item.Status === 1){
                    return <div key={index} className='card mt-3'>
                            <div className='card-body'>
                                <h5><span>{item.Title}</span><span style={{float:'right'} }><a onClick={(e) => this.props.cross(e,item.id)} href="#" className='text-danger'>X</a></span></h5>
                            </div>
                        </div>
                }
                
            })
        );
    }
}
 
export default Complet;