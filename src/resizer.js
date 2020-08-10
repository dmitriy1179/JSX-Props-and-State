import React from "react"
import styled from "styled-components";

const MyDiv = styled.div`
    background-color: red;
    height: 200px;
    padding: 15px;
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

class Resizer extends React.Component {
    state = {
        width: 800,
        height: 600,
        ratio : 0.15,
    };
    componentDidMount() {
        window.addEventListener("resize", this.onResize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }
    onResize = e => {
        this.setState({
            width: e.target.innerWidth,
            height: e.target.innerHeight,
        })
    };
    getInputData = (e) => {
        this.setState({
            ratio: e.target.value,
        })
    }
    render() {
        const myWidth = this.state.width * this.state.ratio;
        const myHeight = this.state.height * this.state.ratio
        return (
            <div>
                <input onChange={this.getInputData}
                    type="number"
                    min={0.1}
                    step={0.05}
                    max={1}
                    defaultValue={0.15}/>
                <MyDiv style={{width : myWidth + "px", height : myHeight + "px"}}>
                    <div style={{fontSize: myWidth * 0.07 + "px"}}>Window width: {this.state.width}</div>
                    <div style={{fontSize: myWidth * 0.07 + "px"}}>My width is {myWidth}</div>
                    <div style={{fontSize: myWidth * 0.07 + "px"}}>My height is {myHeight}</div>
                    <div style={{fontSize: myWidth * 0.07 + "px"}}>Ratio: {this.state.ratio}</div>
                </MyDiv>;
            </div>
        )
    }
}

export default Resizer