import React, { Fragment } from "react";

import loupe from "../assets/imgs/loupe.svg";

const Search = () => {
  return (
    <Fragment>
      <div className="Search-text">Search by #</div>
      <div className="Container-input form-group">
        <input className="form-control" />
        <div className="Container-img">
          <img src={loupe} alt="Search" />
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
