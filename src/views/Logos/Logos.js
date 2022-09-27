import React from "react";
import logo from "../../assets/images/logo.png"
import "../Logos/Logos.scss"
import vector from "../../assets/images/Vector.png"
import line from "../../assets/images/line.png"


class Logos extends React.Component {
        render () {
            return (
                <>
                <div>
                    <img src={logo} className="App-logos" alt="Logos"></img>
                    <img src={vector} className="App-vector" alt="Vector"></img>
                    <img src={line} className="App-line" alt="line"></img>
                    <img src={line} className="App-line-2" alt="line"></img>
                    <img src={line} className="App-line-3" alt="line"></img>
                </div>
                <div>
                
                </div>
                </>
            )
        }
}

export default Logos;