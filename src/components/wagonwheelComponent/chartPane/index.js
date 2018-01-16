import React, { Component } from 'react'; 
import './style.css'
import layout from '../../../../public/images/cricket_field.svg'

class chartPane extends Component {
    constructor(){
        super();
        this.state = {
            color: 'green'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState({
        color: "red"
      });
    }
    render() {
        return (
            <div className="canvas-wrapper">
                <canvas ref="canvas" width={640} height={425} />    
                <img ref="image" src={layout} className="hidden" />
            </div>
        );
    }
}

export default chartPane;