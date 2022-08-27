import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchStory } from '../store/singleStory';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleStory = () => {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStory(params.id));
    }, []);

    const story = useSelector(state => state.singleStory);
    const title = story && story.title;
    const content = (story && story.content) || '';
    const comments = (story && story.comments) || [];

    return (
        <div id="single-story" className="column">
            <h1>{title}</h1>
            {content.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
            ))}
            <h3>Responses:</h3>
            <div id="comments">
                {comments.map(com => (
                    <div key={com.id} className="comment row">
                        <img src={`/${com.author.imageUrl}`} />
                        <div className="column">
                            <Link to={`/authors/${com.author.id}`}>
                                <h5>{com.author.name}</h5>
                            </Link>
                            <div>{com.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SingleStory;
