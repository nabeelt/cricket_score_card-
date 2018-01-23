import React, { Component } from 'react'; 
import { withRouter } from 'react-router'; 
import './style.css';
import axios from 'axios';

const active = {
    backgoround:"green",
    color:"#fff"
}
class AddScore extends Component {
    constructor (props){
        super(props)
        this.state = {
            score_type:'',
            activeClass:{}
        }
        this.selectScoreType = this.selectScoreType.bind(this)
    }
    selectScoreType(e) {
        e.preventDefault()
        this.setState({score_type: e.target.value});
         this.props.onRunsTypeChange(e.target.value);
         this.setState({activeClass:active});

    }


    render () {
        console.log(this.props)
        return (
            <div className="add-score-wrapper">
                <button type="button" className="each button" value="six" style={{...this.props.disabled}} onClick={this.selectScoreType}>
                    <span>SIX</span>
                </button>
                <button type="button" className="each button" value="four" style={this.props.disabled} onClick={this.selectScoreType}>
                    <span>FOUR</span>
                </button>
                <button type="button" className="each button" value="three" style={this.props.disabled} onClick={this.selectScoreType}>
                    <span>THREE</span>
                </button>
                <button type="button" className="each button" value="one" style={this.props.disabled} onClick={this.selectScoreType}>
                    <span>ONE</span>
                </button>
            </div>
        )
    }
}

export default AddScore;