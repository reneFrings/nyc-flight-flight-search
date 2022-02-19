import React, { Component } from "react";
import FeedItem from "./feed-item";

/** Render a <FeedItem /> for each array element */
class Feed extends Component {
  render() {
    /** The attributes from <App /> */
    const {
      data,
      id,
      startAirport,
      startCity,
      duration,
      nonstop,
      targetAirport,
      targetCity,
    } = this.props;

    return (
      <ul
        className="container-fluid list-group list-unstyled p-0"
        id="data-feed"
      >
        {/** data Attribute is set in <App />. Value is the arrFlightData array. Which includes un/filtered elements (objects). */}
        {data.map((dataItem) => (
          /**
           * Create a <FeedItem /> for each array element. Look at feed-item.jsx
           * Attributes includes the value from each array element and its object key.
           * Example: startAirport="Düsseldorf"
           */
          <FeedItem
            data={dataItem}
            key={dataItem[id]}
            startAirport={dataItem[startAirport]}
            startCity={dataItem[startCity]}
            duration={dataItem[duration]}
            nonstop={dataItem[nonstop]}
            targetAirport={dataItem[targetAirport]}
            targetCity={dataItem[targetCity]}
          />
        ))}
      </ul>
    );
  }
}

/** You can set default props. So you don't need set the attributes in <App />. */
Feed.defaultProps = {
  startAirport: "startAirport",
  startCity: "startCity",
  duration: "duration",
  nonstop: "nonstop",
  targetAirport: "targetAirport",
  targetCity: "targetCity",
};

export default Feed;
