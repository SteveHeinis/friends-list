import React, { Component } from 'react';
import Input from './Input';
import ConfirmedList from './ConfirmedList';
import UnconfirmedList from './UnconfirmedList';
import InputEdit from './InputEdit';
import Confirmed from './Confirmed';
import Unconfirmed from './Unconfirmed';

class App extends Component {

  state = {
    confirmedPeoples : [],
    confirmed: 0,
    unconfirmed: 0,
    unconfirmedPeoples : []
  } 

  /////////// STATE ///////////

  getDataFromInput = (prenomForConfirmedList, prenomForUnconfirmedList) => {
    const confirmedPeoples = [...this.state.confirmedPeoples, prenomForConfirmedList]
    const unconfirmedPeoples = [...this.state.unconfirmedPeoples, prenomForUnconfirmedList]
    this.setState({
      confirmedPeoples,
      confirmed: this.state.confirmed + 1,
      unconfirmedPeoples
    }) 
  }

  /////////// CONFIRMATION ///////////

  setConfirmation = (index) => {
    const changed = { ...this.state.confirmedPeoples[index], isConfirmed: !this.state.confirmedPeoples[index].isConfirmed }
    this.state.confirmedPeoples.splice(index, 1, changed)
    this.setState({
      confirmedPeoples: [ ...this.state.confirmedPeoples ] 
    })
    const setUnconfirmedA = { ...this.state.confirmedPeoples[index], display: "none" }
    const setUnconfirmedB = { ...this.state.unconfirmedPeoples[index], color: "red", display: "block" }
    const setConfirmedA = { ...this.state.confirmedPeoples[index], color: "green", display: "block" }
    const setConfirmedB = { ...this.state.unconfirmedPeoples[index], display: "none" }
    if(this.state.confirmedPeoples[index].isConfirmed === false){
      this.state.confirmedPeoples.splice(index, 1, setUnconfirmedA)
      this.state.unconfirmedPeoples.splice(index, 1, setUnconfirmedB)
        this.setState({
          confirmedPeoples: [ ...this.state.confirmedPeoples ],
          confirmed: this.state.confirmed -1,
          unconfirmed: this.state.unconfirmed +1,
          unconfirmedPeoples: [ ...this.state.unconfirmedPeoples]
        })
    }
    else {
      this.state.confirmedPeoples.splice(index, 1, setConfirmedA)
      this.state.unconfirmedPeoples.splice(index, 1, setConfirmedB)
        this.setState({
          confirmedPeoples: [ ...this.state.confirmedPeoples ],
          confirmed: this.state.confirmed +1,
          unconfirmed: this.state.unconfirmed -1,
          unconfirmedPeoples: [ ...this.state.unconfirmedPeoples] 
        })
    }
    console.log(index, changed)
  } 

  /////////// EDIT ///////////

  setEditing = (index) => {
    const changedA = { ...this.state.confirmedPeoples[index], isEditing: !this.state.confirmedPeoples[index].isEditing }
    const changedB = { ...this.state.unconfirmedPeoples[index], isEditing: !this.state.unconfirmedPeoples[index].isEditing }
    this.state.confirmedPeoples.splice(index, 1, changedA)
    this.state.unconfirmedPeoples.splice(index, 1, changedB)
    console.log(this.state.confirmedPeoples)
    console.log(index, changedA)
    this.setState({
      confirmedPeoples: [ ...this.state.confirmedPeoples],
      unconfirmedPeoples: [ ...this.state.unconfirmedPeoples]
      })
    }

  setTextEdit = (newPrenom, index) => {
    const changedA = {...this.state.confirmedPeoples[index], Prenom: newPrenom.Prenom}
    const changedB = {...this.state.unconfirmedPeoples[index], Prenom: newPrenom.Prenom}
    this.state.confirmedPeoples.splice(index, 1, changedA)
    this.state.unconfirmedPeoples.splice(index, 1, changedB)
    this.setState({
      confirmedPeoples: [ ...this.state.confirmedPeoples],
      unconfirmedPeoples: [ ...this.state.unconfirmedPeoples]
    })
  }

  textEdit = (index) => {
      if (this.state.confirmedPeoples[index].isEditing === false) {
        return this.state.confirmedPeoples[index].Prenom
      }
      else {
        return <InputEdit index={index} setEditing={this.setEditing} sendNewPrenom={this.setTextEdit} showPrenom={{...this.state.confirmedPeoples[index]}}/>
      }
    }

  changeTextButton = (index) => {
    if (this.state.confirmedPeoples[index].isEditing === false) {
      return "Edit"
    }
    else {
      return "Save"
    }
  }

  /////////// DELETE ///////////

  deleteElement = (index) => {
    if(this.state.confirmedPeoples[index].isConfirmed === false){
      this.setState({
        unconfirmed: this.state.unconfirmed -1
      })
    }
    else {
      this.setState({
        confirmed: this.state.confirmed -1
      })
    }
    this.state.confirmedPeoples.splice(index, 1)
    this.state.unconfirmedPeoples.splice(index, 1)
    this.setState({
      confirmedPeoples: [...this.state.confirmedPeoples],
      unconfirmedPeoples: [...this.state.unconfirmedPeoples]
    })
  } 

  resetFriends = (empty) => {
    this.setState({
      confirmedPeoples : [],
      unconfirmedPeoples : [],
      confirmed: 0,
      unconfirmed: 0
    })
  }

  render() {

    const confirmedPeoples = this.state.confirmedPeoples.map((key, index) => 
        <ConfirmedList 
          key={index} 
          index={index} 
          setConfirmation={this.setConfirmation} 
          setEditing={this.setEditing} 
          showPrenom={{...this.state.confirmedPeoples[index]}}
          textEdit={this.textEdit}
          changeTextButton={this.changeTextButton}
          deleteElement={this.deleteElement}
          />)

    const unconfirmedPeoples = this.state.confirmedPeoples.map((key, index) => 
        <UnconfirmedList 
          key={index} 
          index={index} 
          setConfirmation={this.setConfirmation} 
          setEditing={this.setEditing} 
          showPrenom={{...this.state.unconfirmedPeoples[index]}}
          textEdit={this.textEdit}
          changeTextButton={this.changeTextButton}
          deleteElement={this.deleteElement}
          />)

    return (
      <div>
        <Input sendPrenom={this.getDataFromInput} resetFriends={this.resetFriends} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <Confirmed showConfirmed={this.state.confirmed} showConfirmedPeoples={confirmedPeoples}/>
            </div>
            <div className="col-md-6">
              <Unconfirmed showUnconfirmed={this.state.unconfirmed} showUnconfirmedPeoples={unconfirmedPeoples}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
