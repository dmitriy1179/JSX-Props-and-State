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
        width: 0,
        ratio : 0.15,
        myWidtn : 200
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
            myWidtn: this.state.width * this.state.ratio || 200
        })
    };
    getInputData = (e) => {
        this.setState({
            ratio: e.target.value,
            myWidtn: this.state.width * this.state.ratio || 200
        })
    }
    render() {
        return <div>
            <input onChange={this.getInputData}
                type="number"
                min={0.1}
                step={0.05}
                max={1}
                defaultValue={0.15}/>
            <MyDiv style={{width : this.state.myWidtn + "px"}}>
                <div style={{fontSize: this.state.myWidtn * 0.07 + "px"}}>Window width: {this.state.width}</div>
                <div style={{fontSize: this.state.myWidtn * 0.07 + "px"}}>My width is {this.state.myWidtn}</div>
                <div style={{fontSize: this.state.myWidtn * 0.07 + "px"}}>Ratio: {this.state.ratio}</div>
            </MyDiv>;
        </div>
    }
}

export default Resizer