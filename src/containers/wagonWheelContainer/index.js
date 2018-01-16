import React, { Component } from 'react'; 
import Template from '../../Template';
import WagonWheelComponent from '../../components/wagonwheelComponent'
import CONFIG from '../../config/config'
import axios from 'axios'
import './style.css'

class WagonContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: { }
        }
    }
    componentWillMount () {
        const url = CONFIG.getAllDetails;
        axios.get(url)
        .then((response)=> {
            console.log(response.data);
            this.setState({data:response.data})
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    render(){
        return (
            <div>
                {
                    (this.state.data && this.state.data.length)?
                    <div>
                    <Template>  <WagonWheelComponent data={this.state.data} />
                    </Template>  </div>
                    :
                    <div>Loading</div>

                }
                
                </div>
        )
    }
}

export default WagonContainer;