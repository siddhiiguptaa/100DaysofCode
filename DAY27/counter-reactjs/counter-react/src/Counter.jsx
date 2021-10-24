import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
         }
    }
    increment = () =>{
        this.setState({number: this.state.number + 1})
    }
    decrement = () =>{
        this.setState({number: this.state.number - 1})
    }
    zero = () =>{
        this.setState({number: 0})
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-4  counter-div">
                    <h1>React Counter</h1>
                    <h1>{this.state.number}</h1>
                    {/* buttons for counter functions */}
                    <button 
                        className="btn btn-success"
                        onClick={this.increment}
                        >
                            Increment
                    </button>
                    <button 
                        className="btn btn-danger"
                        onClick={this.decrement}
                        >
                            Decrement
                    </button>
                    <button 
                        className="btn btn-info"
                        onClick={this.zero}
                        >
                            Zero
                    </button>
                </div>
            </div>
        )
    }
}
