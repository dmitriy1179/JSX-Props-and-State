import React from 'react';

class Accordion extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      isOpen: props.expanded
    };
  }
  static defaultProps = {
      expanded: false
  }
  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
  render() {
    const btnText = this.state.isOpen ? "HIDE" : "SHOW"
    return (
      <div>
        <button onClick={this.onToggle}>{btnText}</button>
        {this.state.isOpen ? this.props.children : null}
      </div>
    );
  }
}
  
export default Accordion;