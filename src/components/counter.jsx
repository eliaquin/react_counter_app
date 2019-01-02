import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { onDelete } = this.props;
    const { id } = this.props.counter;
    return (
      <React.Fragment>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
