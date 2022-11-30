import React, { Component } from "react";
import SearchField from "./search-box.styles";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <SearchField
          type="search"
          className="search-box"
          placeholder={this.props.placeholder}
          onSubmit={console.log("Submitted")}
        />
      </div>
    );
  }
}

//  <SearchBox
//    className={"search-box"}
//    onChangeHandler={onSearchChange}
//    placeholder={"search monster"}
//  />;

export default SearchBar;
