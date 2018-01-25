import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './style.css';
import axios from 'axios';

const active = {
    backgoround: "green",
    color: "#fff"
}
class AddScore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score_type: '',
            activeClass: {},
            color: ''
        }
        this.selectScoreType = this.selectScoreType.bind(this);
        this.scoreColorMap = {
            six: { color: 'red' },
            four: { color: 'blue' },
            three: { color: 'yellow' },
            one: { color: 'white' }
        }
    }
    selectScoreType(e) {
        e.preventDefault()
        let value = e.target.value
        this.setState({ score_type: value });
        this.setState({ activeClass: active });
        this.setState({color: this.scoreColorMap[value].color }, () => {
            this.props.onRunsTypeChange(value, this.state.color)
            console.log(this.state.color, "statecolor")
        });
        
    }

    render() {
        return (
            <div className="add-score-wrapper">
                <button type="button" className="each button" value="six" style={{ ...this.props.disabled }} onClick={this.selectScoreType}>
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