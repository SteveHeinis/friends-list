import React from 'react';

export default class InputEdit extends React.Component {

	getNewPrenom = (e) => {
		e.preventDefault();
		const newPrenom = {Prenom : this.editPrenom.value};
		this.props.sendNewPrenom(newPrenom, this.props.index);
	}

  render() {
    return (
    <div>
    	<form onChange={(e) => this.getNewPrenom(e)} onSubmit={() => this.props.setEditing(this.props.index)}>
	      	<input type='text' className='inputEdit form-control' defaultValue={this.props.showPrenom.Prenom} ref={input => this.editPrenom = input}/>	
      	</form>
    </div>
    );
  }
}
