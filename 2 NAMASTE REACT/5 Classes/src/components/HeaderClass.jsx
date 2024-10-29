/* eslint-disable react/prop-types */
import React from "react";

class Header extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            x: 0,
            y: 100,
        }
    }

    componentDidMount(){
        //Make API calls here
        
    }

    componentDidUpdate(){
        console.log("Some component re-rendered/updated")
        this.timer = setInterval(()=> {
            console.log("Header Component Updated")
        }, 1000)
    }

    componentWillUnmount(){
        clearTimeout(this.timer);
    }

    render(){
        return (
            <>
                <h1>Header</h1>
                <h1> Name: {this.props.name}</h1>
                <h1>X: {this.state.x}</h1>
                <button onClick={() => {
                    this.setState({
                        x: 1,
                    })
                }}>Change X</button>
                <h1>Y: {this.state.y}</h1>
                <button onClick={() => {
                    this.setState({
                        y: 99,
                    })
                }}>Change Y</button>
                <button onClick={()=> {
                    this.setState({
                        x:1,
                        y:99,
                    })
                }}>Change Both</button>
            </>
        )
    }
}

export default Header