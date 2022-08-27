import React, { useEffect } from 'react';
import { fetchAuthor } from '../store/singleAuthor';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import StoriesList from './StoriesList';
import { Link } from 'react-router-dom';

export default function SingleAuthor() {
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAuthor(params.id));
    }, []);

    const author = useSelector(state => state.singleAuthor);
    const name = author && author.info.name;
    const bio = (author && author.info.bio) || '';
    const imageUrl = (author && author.info.imageUrl) || '';
    const comments = (author && author.comments) || [];

    console.log('inside component', author);

    return (
        <div id="single-author" className="column">
            <div id="single-author-detail" className="row">
                <div className="column mr1">
                    <h1>{name}</h1>
                    <p>{bio}</p>
                </div>
                <img src={`/${imageUrl}`} />
            </div>
            <hr />
            <div>
                <h4>STORIES</h4>
                <StoriesList />
                <h4>COMMENTS</h4>
                <div id="comments">
                    {comments.map(com => (
                        <div key={com.id} className="comment row">
                            <img src={`/${com.author.imageUrl}`} />
                            <div className="column">
                                <Link to={`/stories/${com.storyId}`}>
                                    <h5>{com.author.name}</h5>
                                </Link>
                                <div>{com.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
