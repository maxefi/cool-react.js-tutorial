import { TIME_REQUIEST_STARTED, TIME_REQUEST_FINISHED, TIME_REQUEST_ERROR } from 'redux/actions/timeActions'

const initialState = {
    time: null,
    errors: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TIME_REQUIEST_STARTED:
            return Object.assign({}, state, { loading: true, errors: null });
        case TIME_REQUEST_FINISHED:
            return {
                loading: false,
                errors: null,
                time: action.time
            };
        case TIME_REQUEST_ERROR:
            return Object.assign({}, state, { loading: false, errors: action.errors });
        default:
            return state;
    }
}
