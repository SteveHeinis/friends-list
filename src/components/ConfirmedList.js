import React from 'react';

export default class ConfirmedList extends React.Component {

  render() {

    return (
      <div className="card-container col-md-4" style={{display: `${this.props.showPrenom.display}`}}>
	      	<div className="card-element" style={{border: `8px solid ${this.props.showPrenom.color}`}}>
	      		<h3 className="cardName text-nowrap">{this.props.textEdit(this.props.index)}</h3>
	      		<br/>
	      		<label className="form-check-label">
		      		<input 
		      			id="GuestCheckbox" 
		      			className="form-check-input" 
		      			type="checkbox" 
		      			checked={true}
		      			readOnly
		      			onClick={() => {this.props.setConfirmation(this.props.index)}}
		      			/>
					Confirmed
				</label>
				<br/>
				<button className="editButton btn btn-primary" onClick={() => this.props.setEditing(this.props.index)}>{this.props.changeTextButton(this.props.index)}</button>
				<button className="deleteButton btn btn-primary" onClick={() =>this.props.deleteElement(this.props.index)}>Delete</button>
	      	</div>
      </div>
    );
  }
}
