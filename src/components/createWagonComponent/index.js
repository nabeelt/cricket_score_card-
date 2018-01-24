import React, { Component } from 'react'; 
import './style.css';
import axios from 'axios';
import CONFIG from '../../config/config';
import WagonWheelComponent from '../wagonwheelComponent'
import ScoreCard from '../../components/wagonwheelComponent/scorecard'
import ChartPane from '../../components/wagonwheelComponent/chartPane'
import Legends from '../../components/wagonwheelComponent/legends'
import AddScore from './addScore'


const disabledClass = {
    backgound: "grey",
    pointerEvents:"none"
}

class CreateWagonComponent extends Component {
    constructor (props) {
        super(props);

        this.state ={
            current_player:'',
            current_playerId:'',
            current_run: '',
            disabled: true,
            playerList:[],
            runsType:null,
            disableAddScore: disabledClass,
            color : '',
            selectedPlayers:[]
        }
        this.selectTeam = this.selectTeam.bind(this)
        this.selectPlayer = this.selectPlayer.bind(this)
    }

    selectTeam=(e)=> {
        const teamId = e.target.selectedOptions[0].value;
        const playersUrl = CONFIG.playersUrl+"?team_id="+teamId
        // let self = this
        // this.setState({teamName: teamName});
        axios.get(playersUrl)
        .then((response)=> {
            this.setState({playerList :response.data})
            this.setState({disabled: false})
            this.setState({selectedPlayers:response.data})
            // this.setState({selectedPlayers:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    selectPlayer=(e)=> {
        this.setState({current_playerId: e.target.value})
        let playerUrl = CONFIG.playersUrl+"/"+ e.target.value
        this.setState({disableAddScore:{}})
        axios.get(playerUrl)
        .then(response=>{
            this.setState({selectedPlayers: response.data})
        })
        .catch(response=>{
            console.log(response)
        })
    }

    onRunsTypeChange=(param,color)=>{
        // update the selected runs type value - FOUR / SIX etc...
        // runsType
        this.setState({runsType:param})
        this.setState({color:color})
    }

    render(){
        console.log(this.state.playerList)
        console.log(this.state.selectedPlayers,"sele")
        return(
            <div>
                <div className="wagon-header-wrapper">
                    <div className="select-wrap">
                        <select className="select teams" onChange={this.selectTeam}>
                            <option selected="selected" >Select a team </option>
                            {this.props.teamList.map(function(obj,index){ return(<option key={obj.id} value={obj.id}>{obj.team_name}</option>) })}
                        </select>
                    </div>
                    <div className="select-wrap">
                        <select className="select player-list" disabled={this.state.disabled} onChange={this.selectPlayer}>
                            <option selected="selected" >Select a player </option>  
                            {this.state.playerList.map(function(obj,index){ return(<option key={obj.id} value={obj.id}>{obj.player_name}</option>) })}
                        </select>
                    </div>
                </div>

                {/* <ScoreCard /> */}
                {(this.state.playerList&&this.state.playerList.length)?<AddScore disabled={this.state.disableAddScore} onRunsTypeChange={this.onRunsTypeChange}  />:null}
                <ChartPane  selectedPlayers = {this.state.selectedPlayers}  playerId={this.state.current_playerId} lineColor={this.state.color} runsType={this.state.runsType} />
                <Legends />
            </div>
        )
    }
}

export default CreateWagonComponent;