import React, { Component } from 'react';
import './style.css' 
import ChartPane from './chartPane' 
import CONFIG from '../../config/config' 
import axios from 'axios' 

class WagonWheelComponent extends Component {
    constructor (props){
        super(props);
        this.state = {
            matchData : [],
            disabled: true,
            match_id: null,
            teamList: [],
            playerList: [],
            player: {},
            selectedPlayers:[]
        }
        this.selectMatch = this.selectMatch.bind(this);
        this.selectTeam = this.selectTeam.bind(this);
        this.selectPlayer = this.selectPlayer.bind(this);
    }

    selectPlayer (e) {
        const playerId = parseInt(e.target.selectedOptions[0].value);
        const url = CONFIG.getPlayers+"?id="+playerId
        axios.get(url)
        .then((response)=> {
            this.setState({player :response.data})
            this.setState({selectedPlayers:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });

        //sp = Object.assign([...state.player])
    }

    selectTeam (e) {
        const team_id =  parseInt(e.target.selectedOptions[0].value);
        const playerUrl = CONFIG.getPlayers+"?team_id="+team_id+"&match_id="+this.state.match_id;
        axios.get(playerUrl)
        .then((response)=> {
            this.setState({playerList :response.data})
            this.setState({selectedPlayers:response.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    selectMatch (e){
        const match_id = parseInt(e.target.selectedOptions[0].value);
        const teamUrl = CONFIG.getTeams+"?match_id="+match_id;
        axios.get(teamUrl)
        .then((response)=> {
            this.setState({teamList :response.data})
            this.setState({match_id : match_id})
        })
        .catch(function (error) {
            console.log(error);
        });
       this.setState({disabled :false});
    }
    render(){
        return(
            <div>
                {
                (this.props.data && this.props.data)?
                <div className="wagon-header-wrapper">
                    <div className="select-wrap">
                        <select className="select match-name" onChange={this.selectMatch}>
                            <option selected="selected" >Select a match </option>
                            {this.props.data.map(function(obj,index){ return(<option key={obj.id} value={obj.id}>{obj.match_name}</option>) })}
                        </select>
                    </div>
                    <div className="select-wrap">
                        <select className="select teams" disabled={this.state.disabled} onChange={this.selectTeam}>
                            <option selected="selected" >Select a team </option>
                            {this.state.teamList.map(function(obj,index){ return(<option key={obj.id} value={obj.id}>{obj.team_name}</option>) })}
                        </select>
                    </div>
                    <div className="select-wrap">
                        <select className="select player-list" disabled={this.state.disabled} onChange={this.selectPlayer}>
                            <option selected="selected" >Select a player </option>  
                            {this.state.playerList.map(function(obj,index){ return(<option key={obj.id} value={obj.id}>{obj.player_name}</option>) })}
                        </select>
                    </div>
                </div>
                    :
                <div className="wagon-header-wrapper">NO DATA </div>
                }
                
                <ChartPane selectedPlayers={this.state.selectedPlayers} />
            </div>
        )
    }
}

export default WagonWheelComponent;