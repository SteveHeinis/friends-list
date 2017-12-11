import React from 'react';

export default class UnconfirmedList extends React.Component {

  render() {

    return (
      <div className="card-container col-md-4" style={{display: `${this.props.showPrenom.display}`}}>
      	<div className="card-container-fluid">
	      	<div className="card-element" style={{border: `8px solid ${this.props.showPrenom.color}`}}>
	      		<h3 className="cardName text-nowrap">{this.props.textEdit(this.props.index)}</h3>
	      		<br/>
	      		<label className="form-check-label">
		      		<input 
		      			id="GuestCheckbox" 
		      			name="GuestCheckbox" 
		      			type="checkbox" 
		      			checked={false}
		      			onClick={() => {this.props.setConfirmation(this.props.index)}}
		      			/>
					Confirmed
				</label>
				<br/>
				<button className="editButton btn btn-primary" onClick={() => this.props.setEditing(this.props.index)}>{this.props.changeTextButton(this.props.index)}</button>
				<button className="deleteButton btn btn-primary" onClick={() =>this.props.deleteElement(this.props.index)}>Delete</button>
	      	</div>
	    </div>
      </div>
    );
  }
}
