import React, { Component } from 'react'; 
import './style.css'; 

class legends extends Component {
    constructor (props){
        super(props);
        this.state = {}
    }
    render (){
        return (
            <div>
                <ul className="legend-wrapper">
                    <li className="each-legend six">
                        <span>Six</span>
                    </li>
                    <li className="each-legend four">
                        <span>Four</span>
                    </li>
                    <li className="each-legend three">
                        <span>Three</span>
                    </li>
                    <li className="each-legend one">
                        <span>One</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default legends;