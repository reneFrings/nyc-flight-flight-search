import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="container-fluid sticky-top" id="footer">
        <p className="p-4 text-center">{this.props.text}</p>
      </div>
    );
  }
}

export default Footer;
