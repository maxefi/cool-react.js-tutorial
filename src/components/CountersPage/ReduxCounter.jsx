import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';
import { incrementCounter, decrementCounter } from 'redux/actions/counterActions';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
};

class ReduxCounter extends Component {
    constructor(props) {
        super(props);

        this.handlePositiveClick = this.handlePositiveClick.bind(this);
        this.handleNegativeClick = this.handleNegativeClick.bind(this);
    }

    handlePositiveClick() {
        this.props.dispatch(incrementCounter());
    }

    handleNegativeClick() {
        this.props.dispatch(decrementCounter());
    }

    render() {
        return (
            <Counter
                value={this.props.value}
                onPositiveClick={this.handlePositiveClick}
                onNegativeClick={this.handleNegativeClick}
            />
        );
    }
}

ReduxCounter.propTypes = propTypes;

function mapStateToProps(state) {
    const { value } = state.counter;

    return { value };
}

// function connect purpose:
// 1. get mapStateToProps function as an argument
// which passes the whole global state and get only needed state parts from it;
// 2. introduces dispatch function
// 3. when the global state is changed mapStateToProps pulls out new values and passes it to ReduxCounter props

export default connect(mapStateToProps)(ReduxCounter);
