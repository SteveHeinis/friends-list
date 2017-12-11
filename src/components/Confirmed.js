import React from "react";

export default class Confirmed extends React.Component {

  render() {
    return (
      <div>
	      <h1 className="Confirmed">Confirmed : <span>{this.props.showConfirmed}</span></h1>
	      <div>{this.props.showConfirmedPeoples}</div>
      </div>
    );
  }
}
