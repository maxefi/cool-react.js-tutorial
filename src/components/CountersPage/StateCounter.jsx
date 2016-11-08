import React, { Component } from 'react';
import Counter from './Counter';

class StateCounter extends Component {
    constructor() {
        super();

        this.handlePositiveClick = this.handlePositiveClick.bind(this);
        this.handleNegativeClick = this.handleNegativeClick.bind(this);

        this.state = { value: 0 };
    }

    handlePositiveClick() {
        this.setState({ value: this.state.value + 1 });
    }

    handleNegativeClick() {
        this.setState({ value: this.state.value - 1 });
    }

    render() {
        return (
            <Counter
                value={this.state.value}
                onPositiveClick={this.handlePositiveClick}
                onNegativeClick={this.handleNegativeClick}
            />
        );
    }
}

export default StateCounter;
