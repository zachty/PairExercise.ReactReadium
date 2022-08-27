import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

//import { selectStories } from "../features/stories/storiesSlice";

const StoriesList = () => {
    const params = useParams();
    let stories;
    if (params) stories = useSelector(state => state.singleAuthor.stories);
    else stories = useSelector(state => state.stories);
    return (
        <div id="stories" className="column">
            {/* The below ternary operator checks if stories is a truthy value (which should be an array) and if it is truthy it then checks if stories.length is a truthy value (since a length value is 0 or higher, any length other than 0 will return a truthy value.)  If both of these conditions are met then the code will map over stories and render the below jsx.  */}

            {stories && stories.length
                ? stories.map(story => (
                      <div className="story" key={story.id}>
                          <Link to={`/stories/${story.id}`}>
                              <h3>{story.title}</h3>
                          </Link>
                          <Link to={`/authors/${story.author.id}`}>
                              <p>{story.author.name}</p>
                          </Link>
                          <hr />
                      </div>
                  ))
                : null}
        </div>
    );
};

export default StoriesList;
