import storiesSlice from '../features/stories/storiesSlice';
import singleStory from './singleStory';
import authors from './authors';
import singleAuthor from './singleAuthor';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    stories: storiesSlice,
    singleStory,
    authors,
    singleAuthor,
});

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
