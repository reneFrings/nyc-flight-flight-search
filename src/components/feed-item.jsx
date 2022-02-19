import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";

class FeedItem extends Component {
  render() {
    /** Attributes (includes values) set in feed.jsx. */
    const {
      startAirport,
      startCity,
      duration,
      nonstop,
      targetAirport,
      targetCity,
    } = this.props;

    return (
      /** Create this DOM. The attributes (set in feed.jsx) includes key values from each array element (object). */
      <li className="list-group-item">
        {/** If no flight set fade style */}
        <ul className="row data-row list-unstyled" style={this.style(duration)}>
          <li className="col text-center">
            <FontAwesomeIcon icon={faPlaneDeparture} />
            {/** Set the object value like for the key "startAirport" */}
            <h3>{startAirport}</h3>
            <h4 className="fw-normal">{startCity}</h4>
          </li>
          <li className="col align-self-center text-center">
            {/** Set "Kein Flug" or duration */}
            <h3>{duration === false ? "Kein Flug" : duration}</h3>
            <h4 className="fw-normal">
              {/** Set "Nonstop", "Multistop" or "" as text */}
              {this.createStopValue(duration, nonstop)}
            </h4>
          </li>
          <li className="col text-center">
            <FontAwesomeIcon icon={faPlaneArrival} />
            <h3>{targetAirport}</h3>
            <h4 className="fw-normal">{targetCity}</h4>
          </li>
        </ul>
      </li>
    );
  }

  /** Set style */
  style(duration) {
    let style = {};
    if (duration === false) {
      style.color = "#ccc";
    }
    return style;
  }

  /** Set text for stops */
  createStopValue(duration, nonstop) {
    /** Is there a flight  */
    if (duration !== false) {
      /** Set stop value */
      return nonstop === true ? "Nonstop" : "Multistop";
    } else {
      return "";
    }
  }
}

export default FeedItem;
