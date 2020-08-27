import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import Search from "./Search";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import PhotoIcon from "@material-ui/icons/Photo";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);

  console.log("TeslAAAAA", data);

  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link to="/">
          <img
            className="searchPage-logo"
            src="https://www.iconninja.com/files/288/334/429/google-2015-google-new-google-icon.svg"
            alt="Google Logo"
          />
        </Link>
        <div className="searchPage-headerBody">
          <Search hideButtons />
          <div className="searchPage-options">
            <div className="searchPage-optionsLeft">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage-option">
                <DescriptionIcon />
                <Link to="/News">News</Link>
              </div>
              <div className="searchPage-option">
                <PhotoIcon />
                <Link to="/images">images</Link>
              </div>
              <div className="searchPage-option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchPage-option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchPage-option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>
            <div className="searchPage-optionsRight">
              <div className="searchPage-option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage-results">
          <p className="searchPage-resultsCount">
            About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPage-result">
              <a className="searchPage-resultUpperLink" href={item.link}>
                {item.displayLink}
              </a>
              <a className="searchPage-resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage-resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
