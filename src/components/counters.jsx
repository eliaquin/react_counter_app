import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    var counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2">Reset</button>
        {counters.map(counter => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.handleDelete}
            >
              <h2>Que viva Bogo.</h2>
            </Counter>
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
