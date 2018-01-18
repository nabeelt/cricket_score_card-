import React, { Component } from 'react';
import './style.css' 
import ChartPane from './chartPane' 
import ScoreCard from './scorecard' 
import Legends from './legends' 
import CONFIG from '../../config/config' 
import axios from 'axios' 


const mainWrapper = {
    position: 'relative'
}


class WagonWheelComponent extends Component {
    constructor (props){
        super(props);
        this.state = {
            matchData : [],
            disabled: true,
            matchId: null,
            teamList: [],
            playerList: [],
            player: {},
            selectedPlayers:[],
            teamName: ''
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
        const teamId =  parseInt(e.target.selectedOptions[0].value);
        const playerUrl = CONFIG.getPlayers+"?team_id="+teamId+"&match_id="+this.state.matchId;
        const teamName = e.target.selectedOptions[0].text;
        this.setState({teamName: teamName});
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
        const matchId = parseInt(e.target.selectedOptions[0].value);
        const teamUrl = CONFIG.getTeams+"?match_id="+matchId;
        const matchUrl = CONFIG.getAllDetails+"?id="+matchId;
        axios.get(teamUrl)
        .then((response)=> {
            this.setState({teamList :response.data})
            this.setState({matchId : matchId});
        })
        .catch(function (error) {
            console.log(error);
        });

        //populate match details

        axios.get(matchUrl)
        .then((response)=> {
            if(this.props.onUpdateHeaderData)
            {   
                let data =  response.data[0];
                this.props.onUpdateHeaderData({
                    title: data.match_name,
                    date: data.date,
                    stadium: data.stadium
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        });
       this.setState({disabled :false});
    }
    render(){
        return(
            <div style={mainWrapper}>
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
                <ScoreCard teamName={this.state.team_name} scoreCardData = {this.state.selectedPlayers}/>
                <ChartPane selectedPlayers={this.state.selectedPlayers} />

                <Legends />
            </div>
        )
    }
}

export default WagonWheelComponent;