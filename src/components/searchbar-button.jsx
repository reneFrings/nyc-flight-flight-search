import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

class SearchbarButton extends Component {
  btn = React.createRef();

  render() {
    return (
      <div className="col-1 text-left p-0" style={{ width: "85px" }}>
        {/** Pass the checked status as parameter */}
        <input
          type="checkbox"
          className="btn-check"
          id="btncheck1"
          ref={this.btn}
          /** returns true/false as parameter to App.js */
          onClick={() => this.props.onClick(this.btn.current.checked)}
        />
        <label className="btn btn-lg" htmlFor="btncheck1" style={this.style()}>
          <FontAwesomeIcon icon={faStopwatch} size="xl" />
        </label>
      </div>
    );
  }

  /** Set inline css */
  style() {
    let style = {
      boxShadow: "none",
    };
    /** status contains the value of state.searchbarButton in App.js */
    if (this.props.status === true) {
      style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
      style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    }
    /** Add standard css to the style object */
    // style.boxShadow = "none";
    return style;
  }
}
export default SearchbarButton;
