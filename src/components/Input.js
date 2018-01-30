import React from 'react';

export default class Input extends React.Component {

	getPrenom = (e) => {
		e.preventDefault();
		const prenomForConfirmedList = {Prenom : this.Prenom.value,
						isConfirmed: false,
						isEditing: false,
						color: "red",
						display: "none"
						};
		const prenomForUnconfirmedList = {Prenom : this.Prenom.value,
						isConfirmed: false,
						isEditing: false,
						color: "red",
						display: "block"
						};
		this.props.sendPrenom(prenomForConfirmedList, prenomForUnconfirmedList);
		this.prenomForm.reset();		
	}

	resetAll = (e) => {
		e.preventDefault();
		const empty = []
		this.props.resetFriends(empty);
	} 

  render() {	
    return (
      <div>
      	<h1 className="appTitle"> Add a friend to your party ! </h1>
      	<form 
      	className="prenomForm form-group"
      	style={{marginTop: "20px"}}
      	ref={input => this.prenomForm = input} 
      	onSubmit={(e) => this.getPrenom(e)}>
      		<div className="container">
      			<div className="row">
      				<div className="col-md-4"></div>
      				<div className="col-md-4">
			      		<input 
			      		type="text" 
			      		className="form-control"
			      		required 
			      		ref={input => this.Prenom = input}/>
      				</div>
      				<div className="col-md-4"></div>
      			</div>
      		</div>
      		<br/>
      		<button className="btn btn-primary">Submit</button>
      		<button className="btn btn-primary" onClick={(e) => this.resetAll(e)}>Reset</button>
      		<br/>
      	</form>
      </div>
    );
  }
}
