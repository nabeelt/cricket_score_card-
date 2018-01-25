import React, { Component } from 'react'; 
import './style.css'
import layout from '../../../images/cricket_field.svg'
import CONFIG from '../../../config/config'
import axios from 'axios'

const displayNone = {
    display: 'none'
}

let cordinates = []

class chartPane extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPlayers : [],
            currentCordinates: [],
            playerId : '',
            runType: this.props.runsType,
            tempData : {},
            coordinates: {}
        };

        this.drawCoordinates = this.drawCoordinates.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.clearWagonLines = this.clearWagonLines.bind(this);
        this.initializeCanvas = this.initializeCanvas.bind(this)
        this.replaceCoordinatesDB = this.replaceCoordinatesDB.bind(this)
        this.getPlayerDetails = this.getPlayerDetails.bind(this)
        this.updatePlayerDetails = this.updatePlayerDetails.bind(this)
    }
    componentWillReceiveProps (nextProps) {
        console.log(nextProps,"next")
        let playersArray = nextProps.selectedPlayers;
        if(this.props.changePlayer) {
            this.clearWagonLines()
        }
        if(playersArray && playersArray.length) {   
            playersArray.map((currentPlayer)=>{
                if(currentPlayer) {
                    let sixes = currentPlayer.six;
                    let fours = currentPlayer.four;
                    // const dots = currentPlayer.dot;
                    let ones = currentPlayer.one;
                    let threes = currentPlayer.three;
                    if(sixes) {
                        sixes.map((obj,index) => {
                            this.drawCoordinates (obj.x, obj.y,'red') 
                        })
                    }
                    if(fours) {
                        fours.map((obj,index) => {
                            this.drawCoordinates (obj.x, obj.y,'blue') 
                        })
                    }
                    if(threes) {
                        threes.map((obj,index) => {
                            this.drawCoordinates (obj.x, obj.y,'yellow') 
                        })
                    }
                    if(ones) {
                        ones.map((obj,index) => {
                            this.drawCoordinates (obj.x, obj.y,'white') 
                        })
                    }
                    
                }
        
            })
        }       
    }
    getPosition (e) {
        const canvas = this.refs.canvas
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
        var y = e.clientY - rect.top;
        let obj = {"x":x,"y":y}
        cordinates.push(obj);
        this.setState({currentCordinates: cordinates})
        this.drawCoordinates(x,y,this.props.lineColor)
    }


    componentDidMount() {
        this.initializeCanvas();
    }

    initializeCanvas () {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const groundLayoutImg = this.refs.image
        groundLayoutImg.onload = () => {
            ctx.drawImage(groundLayoutImg, 0, 0,ctx.canvas.width,ctx.canvas.height);
        }
    }

    drawCoordinates (x,y,color) {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth=2
        ctx.strokeStyle= color;
        ctx.moveTo(400.5,393);
        ctx.lineTo(x,y);
        ctx.stroke();
        this.replaceCoordinatesDB(x,y);
        console.log(color,"color")
    }

    replaceCoordinatesDB (x,y) {
        let runType = this.props.runsType;
        let playerId = this.props.playerId;
        let url  = CONFIG.playersUrl+"/"+playerId

        this.getPlayerDetails(url)
        .then(response=>{
            console.log(response,"response")
            let data = response.data
            let tempData = {"x":x,"y":y}
            data[runType].push(tempData);
            this.updatePlayerDetails(url,data)
            .then(response=>{
                console.log(response);
            })
            .catch((error)=> {
                console.log(error);
            });
        })
        .catch((error)=> {
            console.log(error);
          });
    }


    getPlayerDetails=(url)=>{
        return axios.get(url)
        
    }
    updatePlayerDetails= (url,data)=>{
        return axios.put(url,data)
    }

    clearWagonLines= () => {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d");
        const canvasImage = this.refs.image
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.drawImage(canvasImage, 0, 0,ctx.canvas.width,ctx.canvas.height);
    }
    

    render() {
        return (
            <div className="canvas-wrapper">
                <canvas ref="canvas" className="canvas" width={800} height={900} onClick={this.getPosition} style={this.props.disabled}/>    
                <img ref="image" src={layout} style={displayNone}/>
                <draw />
            </div>
        );
    }
}

export default chartPane;