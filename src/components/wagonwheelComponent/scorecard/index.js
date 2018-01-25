import React, { Component } from 'react'; 
import './style.css'

const scorecardWrapper = {
    border: '1px solid #bbb',
    width: '200px',
    height: 'auto',
    position: 'absolute',
    top: '95px',
    right: '50px',
    padding: '10px 10px 10px 10px'
}

class scoreCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total_team_score:'',
            team_name: '',
            updatedScore : {},
            playerTotal : ''
        }
    }

    componentWillReceiveProps (nextProps){
        console.log(nextProps)
        let scoreData = nextProps.scoreCardData;
        let total_score= null;
        let individualTotal= null;
        let total_6s= null;
        let total_4s= null;
        let total_1s= null;
        let total_3s= null;
        let scoreObj = {};
        
        if(scoreData.length == 1) {
            let obj = scoreData[0];
            individualTotal = (6*obj.six.length)+(4*obj.four.length)+(3*obj.three.length)+(obj.one.length);
            scoreObj = {
                one : obj.one.length,
                three: obj.three.length,
                four: obj.four.length,
                six: obj.six.length
            }

            this.setState({updatedScore: scoreObj})
            this.setState({playerTotal: individualTotal})

        }else {
            scoreData.map((obj)=>{
                total_6s = total_6s + (obj.six.length);
                total_4s = total_4s + (obj.four.length);
                total_1s = total_1s + (obj.one.length);
                total_3s = total_3s + (obj.three.length);
                total_score = total_score + (6*total_6s) + (4*total_4s) + (total_1s) + (3*total_3s);
                this.setState({team_name:obj.team_name });
            })
            scoreObj = {
                one : total_1s,
                three:total_3s,
                four: total_4s,
                six:total_6s
            }
            this.setState({total_team_score: total_score});
            this.setState({updatedScore: scoreObj});
        }
        // 
        
    }

    render (){
        return(
            <div>
            {(this.state.total_team_score)?
                <div className="scorecard-wrap" style={scorecardWrapper}>
                   
                    <div className ="each">
                        <label>Team name:</label>
                        <span>{this.props.teamName}</span>
                    </div>
                    <div className ="each">
                        <label>Team total:</label>
                        <span>{this.state.total_team_score}</span>
                    </div>
                    {(this.state.playerTotal )?
                        <div className ="each">
                            <label>Player total:</label>
                            <span>{this.state.playerTotal}</span>
                        </div>
                    :
                    null
                    }
                    
                    <div className ="each">
                        <label>Total 6s:</label>
                        <span>{this.state.updatedScore.six}</span>
                    </div>
                    <div className ="each">
                        <label>Total 4s:</label>
                        <span>{this.state.updatedScore.four}</span>
                    </div>
                    <div className ="each">
                        <label>Total 1s:</label>
                        <span>{this.state.updatedScore.one}</span>
                    </div>
                    <div className ="each">
                        <label>Total 3s:</label>
                        <span>{this.state.updatedScore.three}</span>
                    </div>
                 </div>:null}
                 </div>
            
        )
    }
}


export default scoreCard;