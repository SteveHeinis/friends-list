import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDYYVMMsbpYMVR5kri6jKcOhb1xjnbKBCg",
    authDomain: "friendslist-crud.firebaseapp.com",
    databaseURL: "https://friendslist-crud.firebaseio.com"
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base