import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Authors() {
    const authors = useSelector(state => state.authors);
    return (
        <div id="authors" className="column">
            {authors && authors.length
                ? authors.map(author => (
                      <Link to={`/authors/${author.id}`} key={author.id}>
                          <div className="author row">
                              <img src={author.imageUrl} />
                              <h3>{author.name}</h3>
                          </div>
                          <hr />
                      </Link>
                  ))
                : null}
        </div>
    );
}
