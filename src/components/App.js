import React, { useEffect } from 'react';
import { Navbar, StoriesList, SingleStory, Authors, SingleAuthor } from './';
import { fetchStories } from '../features/stories/storiesSlice';
import { fetchAuthors } from '../store/authors';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStories());
        dispatch(fetchAuthors());
    }, [dispatch]);

    return (
        <div id="main">
            <div className="column container">
                <div id="header">
                    <h1>Readium</h1>
                </div>
                <Navbar />
                <Routes>
                    <Route index element={<StoriesList />} />
                    <Route path="stories" element={<StoriesList />} />
                    <Route path="stories/:id" element={<SingleStory />} />
                    <Route path="authors" element={<Authors />} />
                    <Route path="authors/:id" element={<SingleAuthor />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
