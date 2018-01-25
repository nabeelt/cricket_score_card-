import React, { Component } from 'react'; 
import Template from '../../Template';
import '../../styles/common/style.css'
import CreatematchComponent from '../../components/createMatchComponent';

class CreateMatchContainer extends Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        
        return (
            <div>
                <Template showBtn={false}>
                    <CreatematchComponent />
                </Template>
            </div>       
        )
    }
}

export default CreateMatchContainer;