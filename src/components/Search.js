import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory(); //gives us the browser's hsitory.

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    history.push("/search");
  };

  console.log(input);

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="home-bodyInput"
          type="text"
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search-buttons">
          <Button
            onClick={search}
            type="submit"
            variant="outlined"
            className="search-buttonsGoogleSearch"
          >
            Google Search
          </Button>
          <Button variant="outlined" className="search-buttonsLucky">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button
            onClick={search}
            type="submit"
            variant="outlined"
            className="search-buttonsGoogleSearch search-buttonsHidden"
          >
            Google Search
          </Button>
          <Button
            variant="outlined"
            className="search-buttonsLucky search-buttonsHidden"
          >
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
