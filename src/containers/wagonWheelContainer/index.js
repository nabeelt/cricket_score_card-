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
            data: { },
            headerData:{}
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

    // this will update the common header data. OPTIONAL
    onUpdateHeaderData=(data)=>{
        this.setState({
            headerData:data
        })
    }
    
    render(){
        return (
            <div>
                {
                    (this.state.data && this.state.data.length)?
                    <div>
                    <Template headerData={this.state.headerData}>  
                    <WagonWheelComponent onUpdateHeaderData={this.onUpdateHeaderData} data={this.state.data} />
                    </Template>  </div>
                    :
                    <div>Loading</div>

                }
                
                </div>
        )
    }
}

export default WagonContainer;