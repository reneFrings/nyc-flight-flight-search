import React, { Component } from "react";
import SearchbarButton from "./searchbar-button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/** Render a <Searchbar /> with an <input> which reacts on each change. */
class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  /** Update state.searchValue. Is the state update complete it calls a method in <App /> and pass the state (input) value */
  handleChange = (e) => {
    this.setState({ searchValue: e.currentTarget.value }, () =>
      this.props.onChange(this.state.searchValue)
    );
  };

  /** Update state.searchValue to "". Is the state update complete it calls a method in <App /> and pass the state (input) value */
  handleClear = () => {
    this.setState({ searchValue: "" }, () =>
      this.props.onChange(this.state.searchValue)
    );
  };

  render() {
    return (
      <div className="container-fluid" id="searchbar">
        <div className="row align-items-center p-4">
          <SearchbarButton
            /** Saves attribute value of "onClick" from App.js here again in "onClick" to pass the value to <SearchButton /> */
            onClick={this.props.onClick}
            /** Saves attribute value of "status" from App.js here again in "status" to pass the value to <SearchButton /> */
            status={this.props.status}
          />
          <div className="input-group col p-0">
            <input
              /** search is not showing the cross icon in Firefox and other browsers. Therefore use a button. */
              type="text"
              placeholder="Suchen..."
              aria-label="Suchen..."
              name="searchbar"
              /** Get his value from state */
              value={this.state.searchValue}
              className="form-control form-control-lg rounded"
              style={{ height: "48.5px" }}
              /** Update state.searchValue. After that it calls a method in <App /> */
              onChange={(e) => this.handleChange(e)}
            />
            <button
              className="btn bg-transparent shadow-none"
              style={{ marginLeft: "-40px", zIndex: "100", height: "48.5px" }}
              /** Update state.searchValue to "". */
              onClick={this.handleClear}
            >
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="colorPrimary50"
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Searchbar;
