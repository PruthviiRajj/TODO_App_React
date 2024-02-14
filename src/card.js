import React, { Component } from 'react';
import './style.css';

class Card extends Component {
    state = {
        text:0,
        color:'yellow-bg'
      } 
    counter(flag){
        if(flag){
            this.setState({text:this.state.text + 1,color:'red-bg'})
        }
        else{
            this.setState({text:this.state.text - 1,color:'yellow-bg'})
        }
        
    }
    render() { 
        return (
            <div class="card" >
                <img class="card-img-top" src={this.props.img}></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary" className={this.state.color}>{this.state.text}</a>
                    <button onClick={() => this.counter(1)}><a href="#" class="btn btn-primary">Add</a></button>
                    <button onClick={() => this.counter(0)}><a href="#" class="btn btn-primary">Sub</a></button>
                </div>
            </div>
        );
    }
}
 
export default Card;
