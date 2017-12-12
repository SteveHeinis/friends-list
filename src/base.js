import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDncFk8mvNfflUbQ4HOBGjCym2q5kvUA_k",
    authDomain: "add-friends-to-party.firebaseapp.com",
    databaseURL: "https://add-friends-to-party.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base