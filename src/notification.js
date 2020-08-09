import React from "react"

class Notification extends React.Component {
    state = {
        isNotification : true
    }
    componentDidMount() {
        this.showNotification()
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutId)
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
                {this.state.isNotification ? <div>{this.props.message}</div> 
                : <div><button onClick={this.showNotification}>Show notification with two components again</button></div>}
            </div>
        )
    }
}

export default Notification