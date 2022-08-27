import axios from 'axios';

const SET_AUTHOR = 'SET_AUTHOR';

const setAuthor = data => ({
    type: SET_AUTHOR,
    data,
});

export const fetchAuthor = id => {
    return async dispatch => {
        try {
            const [info, comments, stories] = await Promise.all([
                axios.get(`/api/authors/${id}`),
                axios.get(`/api/authors/${id}/comments`),
                axios.get(`/api/authors/${id}/stories`),
            ]).then(res => res.map(item => item.data));
            dispatch(setAuthor({ info, comments, stories }));
        } catch (error) {
            console.error(error);
        }
    };
};

const init = {
    info: {},
    comments: [],
    stories: [],
};

export default (state = init, action) => {
    switch (action.type) {
        case SET_AUTHOR:
            return action.data;
        default:
            return state;
    }
};
