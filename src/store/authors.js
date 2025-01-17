import axios from 'axios';

const SET_AUTHORS = 'SET_AUTHORS';

const setAuthors = authors => ({
    type: SET_AUTHORS,
    authors,
});

export const fetchAuthors = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('/api/authors');
            dispatch(setAuthors(data));
        } catch (error) {
            console.error(error);
        }
    };
};

export default (state = [], action) => {
    switch (action.type) {
        case SET_AUTHORS:
            return action.authors;
        default:
            return state;
    }
};
