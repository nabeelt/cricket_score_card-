import React, { Component } from 'react';
import { withRouter } from 'react-router'
import axios from 'axios'
import CONFIG from '../../config/config'
import Template from '../../Template';
import '../../styles/common/style.css'
import CreateWagonComponent from '../../components/createWagonComponent';
import config from '../../config/config';

class CreateWagonContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match_id : this.props.match.params.id,
            header_data : {},
            team_list: []
        }
    }
    componentWillMount(){
        let url = CONFIG.matchUrl+"?id="+this.state.match_id
        axios.get(url)
        .then((response)=>{
            let data = response.data[0]
            
            let obj = {
                title: data.match_name,
                date: data.date,
                stadium: data.stadium
            }
            this.setState({header_data: obj})
        })
        .then((error)=>{
            console.log(error)
        })

        let teamUrl = CONFIG.teamsUrl+"?match_id="+this.state.match_id
        axios.get(teamUrl)
        .then((response)=>{
            this.setState({team_list: response.data})
        })
        .then((error)=>{
            console.log(error)
        })
    }
    
    render(){
        return (
            <div>
            {
                (this.state.header_data)?
                <div>
                <Template showBtn={false} headerData={this.state.header_data}>  
                    <CreateWagonComponent teamList = {this.state.team_list}/>
                </Template>  </div>
                :
                <div>Loading</div>

            }
            
            </div>
        )
    }
}

export default withRouter(CreateWagonContainer);