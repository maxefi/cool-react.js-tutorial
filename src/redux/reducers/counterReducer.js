import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'redux/actions/counterActions';

const initialState = { value: 0 };

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { value: state.value + 1 };
        case DECREMENT_COUNTER:
            return { value: state.value - 1 };
        default:
            return state;
    }
}
