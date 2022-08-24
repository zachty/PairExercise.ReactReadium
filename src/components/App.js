import React, { useEffect } from "react";
import { Navbar, StoriesList } from "./";
import { fetchStories } from "../features/stories/storiesSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStories());
  }, [dispatch]);

  return (
    <div id="main">
      <div className="column container">
        <div id="header">
          <h1>Readium</h1>
        </div>
        <Navbar />
      </div>
      <StoriesList />
    </div>
  );
};

export default App;
