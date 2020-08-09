import React from "react"
import Notification from"./notification"

class NewNotification extends React.Component {
    state = {
        message : null,
        isNotif : false
    }
    getInputData = (e) => {
        this.setState({
            message : e.target.value,
            isNotif : true
        });
        this.timeoutId = setTimeout(() => {
            this.setState({isNotif : false});
         }, this.props.delay)
    }
    render() {
        return (
            <div>
                <input onInput={this.getInputData} type="text" placeholder="notification"/>
                {this.state.isNotif ? <div>{this.state.message}</div> : 
                <Notification delay={this.props.delay} message={this.state.message || "Hello"}/>}
            </div>
        )
    }
}
export default NewNotification