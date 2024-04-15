import React from "react";
import "../style/search.css";
import InputComponent from "../component/input";

const Search = () => {
  return (
    <div className="search-container">
      <div className="amount">
        Amount to send
        <InputComponent name={"amount"}/>
      </div>
      <div className="receive">
        Amount to receive
        <InputComponent name={"receive"}/>
      </div>
    </div>
  );
};

export default Search;
