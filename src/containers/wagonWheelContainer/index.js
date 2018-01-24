import React, { Component } from 'react'; 
import { withRouter } from 'react-router'; 
import Template from '../../Template';
import WagonWheelComponent from '../../components/wagonwheelComponent'
import CONFIG from '../../config/config'
import axios from 'axios'
import './style.css'


class WagonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: { },
            headerData:{}
        }
    }
    componentWillMount () {
        const url = CONFIG.matchUrl;
        axios.get(url)
        .then((response)=> {
            this.setState({data:response.data})
            if(this.state.data && this.state.data.length) {}
            else {
                this.props.history.push("/creatematch/");
            }
        })
        .catch(function (error) {
            // console.log(error);
        });
        
    }

    // this will update the common header data. OPTIONAL
    updateHeaderData=(data)=>{
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
                    <Template showBtn={true} headerData={this.state.headerData}>  
                        <WagonWheelComponent updateHeaderData={this.updateHeaderData} data={this.state.data} />
                    </Template>  </div>
                    :
                    <div>Loading</div>

                }
                
                </div>
        )
    }
}

export default withRouter(WagonContainer);