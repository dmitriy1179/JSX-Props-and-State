import React from "react"

class FakeLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true
        };
    }
    componentDidMount() {
        this.fakeUpLoad()
    }
    componentWillUnmount() {
        clearTimeout(this.timeoutId)
    }
    fakeUpLoad = () => {
        this.timeoutId = setTimeout(() => {
            this.setState({loading : false})
        }, this.props.delay)
    }
    newLoading = () => {
        this.setState({loading : true})
        this.fakeUpLoad()
    }
    render(){
        return (
            <div>
                {this.state.loading ? "LOADING" : this.props.text}
                {this.state.loading ? null : 
                <div>
                    <button onClick={this.newLoading}>new Load</button>
                </div>}
            </div>
        )
    }
}

export default FakeLoader

