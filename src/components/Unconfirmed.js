import React from 'react';

export default class Unconfirmed extends React.Component {

  render() {
    return (
      <div>
	      <h1 className="Unconfirmed">Unconfirmed : {this.props.showUnconfirmed}</h1>
	      <div>{this.props.showUnconfirmedPeoples}</div>
      </div>
    );
  }
}
