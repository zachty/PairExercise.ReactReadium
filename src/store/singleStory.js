import axios from 'axios';
//ACTION TYPE
const GET_STORY = 'GET_STORY';

//ACTION CREATOR
const getStory = story => ({
    type: GET_STORY,
    story,
});

export const fetchStory = id => {
    return async dispatch => {
        try {
            const { data } = await axios.get(`/api/stories/${id}`);
            dispatch(getStory(data));
        } catch (err) {
            console.error(err);
        }
    };
};

//REDUCER
export default (state = {}, action) => {
    switch (action.type) {
        case GET_STORY:
            return action.story;
        default:
            return state;
    }
};
