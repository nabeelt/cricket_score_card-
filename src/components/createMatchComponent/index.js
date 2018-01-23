import React, { Component } from 'react'; 
import { withRouter } from 'react-router'; 
import './style.css';
import axios from 'axios';
import CONFIG from '../../config/config';

let matchUrl = CONFIG.matchUrl
let teamUrl = CONFIG.teamsUrl
let playerUrl = CONFIG.playersUrl
let temp = []

class creatematchComponent extends Component {
   

    constructor(){
        super();
        this.state = {
            match_name: '',
            stadium: '',
            date: '',
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            player5: '',
            player6: '',
            team_name1: '',
            team_name2: '',
            matchId :'',
            status:''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.postPlayersDetails = this.postPlayersDetails.bind(this);
        this.postTeamDetails = this.postTeamDetails.bind(this);
        this.getTimeStamp = this.getTimeStamp.bind(this)
        this.getData = this.getData.bind(this)
        this.postData = this.postData.bind(this)
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    getTimeStamp () {
        return  Math.floor(Date.now() / 1000);
    }

    handleSubmit(event) {
        event.preventDefault();
        const match_data =  {
            "match_name" : this.state.match_name,
            "stadium" : this.state.stadium,
            "date": this.state.date
        }

        this.postData(matchUrl,match_data)
        .then((response)=>{
            if(response.data.id){
                this.setState({matchId: response.data.id})
                this.postTeamDetails(this.state.matchId,teamUrl);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        
   }

   postTeamDetails = (id,url) =>{
       let data=[{
           match_id: id,
           team_name: this.state.team_name1,
           id: this.getTimeStamp()

       },{
            match_id: id,
            team_name: this.state.team_name2,
            id: this.getTimeStamp()+1
       }]

       data.map((obj,index)=>{
            this.postData(url,obj)
            .then((response)=>{
                if(response.status == 201){
                    this.postPlayersDetails(response.data,playerUrl,index);
                }
            })
            .catch(function(error){
                console.log(error);
            })
       })
        
   }

   postPlayersDetails = (teamData,url,index) =>{
       let teamId = teamData.id
       let matchId = teamData.match_id
        let data = []
        let temp = []
        if (index == 1) {
            data = [{
                player_name: this.state.player4,
                id: this.getTimeStamp()+1,
                team_id: teamId,
                match_id: matchId,
                six : [],
                four: [],
                three: [],
                one :[]
            },
            {
                player_name: this.state.player5,
                id: this.getTimeStamp()+2,
                match_id: matchId,
                team_id: teamId,
                six : [],
                four: [],
                three: [],
                one :[]
            },
            {
                player_name: this.state.player6,
                id: this.getTimeStamp()+3,
                match_id: matchId,
                team_id: teamId,
                six : [],
                four: [],
                three: [],
                one :[]
            }]
        } else {
            data = [{
                player_name: this.state.player1,
                id: this.getTimeStamp()+1,
                team_id: teamId,
                match_id: matchId,
                six : [],
                four: [],
                three: [],
                one :[]
            },
            {
                player_name: this.state.player2,
                id: this.getTimeStamp()+2,
                match_id: matchId,
                team_id: teamId,
                six : [],
                four: [],
                three: [],
                one :[]
            },
            {
                player_name: this.state.player3,
                id: this.getTimeStamp()+3,
                match_id: matchId,
                team_id: teamId,
                six : [],
                four: [],
                three: [],
                one :[]
            }]
        }
        data.map((obj)=>{
            this.postData(url,obj)
            .then((response)=>{
                this.setState({status: response.status});
               
                    this.props.history.push("/createwagon/"+this.state.matchId);
                    
            })
            .catch(function(error){
                console.log(error);
            })
            
        })
   }

   postData = (url,data) => {
       return axios.post(url,data)
   }
   getData = (url)=> {
    return axios.get(url)
   }
    render(){
        return (
            <div className="global-width creatematch-wrapper">
                <h2 className="page-heading">Create match</h2>
                <form id="creatematch-form" onSubmit={this.handleSubmit} ref="form">
                    <ul className="list two-section clearfix ul-reset match-details">
                        <li className="list-item">
                            <label className="form-label">Match name</label>
                            <input type="text" className="input-box" placeholder="" name="match_name" value={this.state.match_name} onChange={this.onChange} required="required"/>
                        </li>
                        <li className="list-item">
                            <label className="form-label">Stadium</label>
                            <input type="text" className="input-box" placeholder="" name="stadium" value={this.state.stadium} onChange={this.onChange} required="required"/>
                        </li>
                        <li className="list-item">
                            <label className="form-label">Date</label>
                            <input type="date" className="input-box" placeholder="" name="date" value={this.state.date} onChange={this.onChange} required="required"/>
                        </li>
                    </ul>
                    <div className="team-wrap">
                        <h3 className="heading2">Enter Team Details</h3>
                        <div className="each-division left-section">
                            <span className="heading3">Team Name</span>
                            <div className="team-name">
                                <label className="form-label"> {this.props.teamName}</label>
                                <input type="text" className="input-box" name="team_name1" value={this.state.team_name1} onChange={this.onChange} required="required"/>
                            </div>
                            <ul className="list team-list-entry clearfix ul-reset">
                                <li className="list-item">
                                    <label className="form-label">Player 1</label>
                                    <input type="text" className="input-box" name="player1" value={this.state.player1} onChange={this.onChange} required="required"/>
                                </li>
                                <li className="list-item">
                                    <label className="form-label">Player 2</label>
                                    <input type="text" className="input-box" name="player2" value={this.state.player2} onChange={this.onChange} required="required"/>
                                </li>
                                <li className="list-item">
                                    <label className="form-label">Player 3</label>
                                    <input type="text" className="input-box" name="player3" value={this.state.player3} onChange={this.onChange} required="required"/>
                                </li>
                            </ul>
                        </div>

                        <div className="each-division right-section">
                            <span className="heading3">Team Name</span>
                            <div className="team-name">
                                <label className="form-label"> {this.props.teamName}</label>
                                <input type="text" className="input-box" name="team_name2" value={this.state.team_name2} onChange={this.onChange} required="required"/>
                            </div>
                            <ul className="list team-list-entry clearfix ul-reset">
                                <li className="list-item">
                                    <label className="form-label">Player 1</label>
                                    <input type="text" className="input-box" name="player4" value={this.state.player4} onChange={this.onChange} required="required"/>
                                </li>
                                <li className="list-item">
                                    <label className="form-label">Player 2</label>
                                    <input type="text" className="input-box" name="player5" value={this.state.player5} onChange={this.onChange} required="required"/>
                                </li>
                                <li className="list-item">
                                    <label className="form-label">Player 3</label>
                                    <input type="text" className="input-box" name="player6" value={this.state.player6} onChange={this.onChange} required="required"/>
                                </li>
                            </ul>

                        </div>
                        <div className="button-wrapper">
                            <button type="submit" className="button"><span>Submit</span></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default withRouter(creatematchComponent);
