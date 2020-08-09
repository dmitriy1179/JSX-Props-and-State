import React from "react"

class InputNotification extends React.Component {
    state = {
        message : null,
        isNotification : true
    }
    componentDidMount() {
        this.showNotification();
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutId)
    }
    getInputData = (e) => {
        this.setState({
            message : e.target.value,
            isNotification : true
        });
        clearTimeout(this.timeoutId)
        this.timeoutId = setTimeout(() => {
            this.setState({isNotification : false});
        }, this.props.delay)
    }
    showNotification = () => {
        this.setState({isNotification : true})
        this.timeoutId = setTimeout(() => {
            this.setState({isNotification : false})
        }, this.props.delay)
    }
    render() {
        return (
            <div>
                <input onInput={this.getInputData} type="text" placeholder="notification"/>
                {this.state.isNotification ? <div>{this.state.message || "Hello"}</div> :
                <div><button onClick={this.showNotification}>Show notification again</button></div>}
            </div>
        )
    }
}

export default InputNotification