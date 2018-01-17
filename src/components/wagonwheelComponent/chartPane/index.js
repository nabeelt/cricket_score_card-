import React, { Component } from 'react'; 
import './style.css'
import layout from '../../../images/cricket_field.svg'

const displayNone = {
    display: 'none'
}
let a = []

class chartPane extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPlayers : []
        };

        this.drawCoordinates = this.drawCoordinates.bind(this);
        this.drawDots = this.drawDots.bind(this);
        this.getPosition = this.getPosition.bind(this);
        this.clearWagonLines = this.clearWagonLines.bind(this);
        this.initializeCanvas = this.initializeCanvas.bind(this)
    }
    componentWillReceiveProps (nextProps) {
        const playersArray = nextProps.selectedPlayers;
        if(playersArray.length) {
            this.clearWagonLines()
            playersArray.map((currentPlayer)=>{
                if(currentPlayer) {
                    const sixes = currentPlayer.six;
                    const fours = currentPlayer.four;
                    // const dots = currentPlayer.dot;
                    const ones = currentPlayer.one;
                    const threes = currentPlayer.three;
                    if(sixes) {
                        sixes.map((obj,index) => {
                            this.drawCoordinates (obj.x, obj.y,"red") 
                        })
                    }
                    if(fours) {
                        fours.map((obj,index) => {
                            this.drawCoordinates (obj.x, obj.y,"blue") 
                        })
                    }
                    if(threes) {
                        threes.map((obj,index) => {
                            this.drawCoordinates (obj.x, obj.y,"yellow") 
                        })
                    }
                    if(ones) {
                        ones.map((obj,index) => {
                            this.drawCoordinates (obj.x, obj.y,"white") 
                        })
                    }
                    // if(dots) {
                    //     dots.map((obj,index) => {
                    //         this.drawDots (obj.x, obj.y) 
                    //     })
                    // }
                    
                }
        
            })
        }
      
        // this.parseData(nextProps);
       
    }
    getPosition (e) {
        const canvas = this.refs.canvas
        var rect = canvas.getBoundingClientRect();
        var x = e.clientX - rect.left; // x == the location of the click in the document - the location (relative to the left) of the canvas in the document
        var y = e.clientY - rect.top;
        console.log(x,y);
        let obj = {"x":x,"y":y}
        a.push(obj);

    }


    componentDidMount() {
        this.initializeCanvas();
    }

    initializeCanvas () {
        const canvas = this.refs.canvas
        const ctx = canvas.getContext("2d")
        const img = this.refs.image
        img.onload = () => {
            ctx.drawImage(img, 0, 0,ctx.canvas.width,ctx.canvas.height);
        }
    }

    drawDots(x,y) {
        const canvas = this.refs.canvas
        let ctx = canvas.getContext("2d");
        let pointSize = 2
        ctx.fillStyle = "#6b6b6b"; // Red color
        ctx.beginPath(); //Start path
        ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
        ctx.fill(); // Close the
    }

    drawCoordinates (x,y,color) {
        const canvas = this.refs.canvas
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth=2
        ctx.strokeStyle= color;
        ctx.moveTo(400.5,393);
        ctx.lineTo(x,y);
        ctx.stroke();
    }

    clearWagonLines() {
        const canvas = this.refs.canvas
        let ctx = canvas.getContext("2d");
        const img = this.refs.image
        ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
        ctx.drawImage(img, 0, 0,ctx.canvas.width,ctx.canvas.height);
    }
    

    render() {
        return (
            <div className="canvas-wrapper">
                <canvas ref="canvas" className="canvas" width={800} height={900} onClick={this.getPosition}/>    
                <img ref="image" src={layout} style={displayNone}/>
                <draw />
            </div>
        );
    }
}

export default chartPane;