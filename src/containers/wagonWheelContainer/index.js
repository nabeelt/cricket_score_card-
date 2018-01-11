import React, { Component } from 'react'; 
import Template from '../../Template';
import WagonWheelComponent from '../../components/wagonwheelComponent'

class wagonContainer extends Component {
    constructor() {
        super();
    }
    
    render(){
        return (
            <Template>
                <WagonWheelComponent />
            </Template>       
        )
    }
}

export default wagonContainer;