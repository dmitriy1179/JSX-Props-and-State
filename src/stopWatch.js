import React from "react"

class StopWatch extends React.Component {
    state = {
        count : 0,
        isDisabled : true,
    }
    componentDidMount() {
        this.start()
    }
    start = () => {
        this.intervalID = setInterval(() => {
            this.setState((state) => ({
                count: state.count + 1,
              }))
        }, 1000);
        this.setState({isDisabled : true})
    }
    stop = () => {
        clearInterval(this.intervalID);
        this.setState({isDisabled : false});
    }
    reset = () => {
        this.stop();
        this.setState({count : 0});
        this.start()
    }
    render() {
        const current = new Date(this.state.count*1000) 
        return <div>
            <div style={{fontSize: 50 + "px"}}>
                <span>{current.getUTCHours()}h </span>
                <span>{current.getMinutes()}m </span>
                <span>{current.getSeconds()}s </span>
            </div>
            <button disabled={this.state.isDisabled} onClick={this.start}>Start</button>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.stop}>Stop</button>
            </div>
    }
}
export default StopWatch