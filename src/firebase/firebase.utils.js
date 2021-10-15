import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider } from 'firebase/auth'
const config = {
  apiKey: 'AIzaSyDxj1OtJKtRCkcFuTVzPpAWDHpapGnI_ak',
  authDomain: 'crwn-db-79e4d.firebaseapp.com',
  projectId: 'crwn-db-79e4d',
  storageBucket: 'crwn-db-79e4d.appspot.com',
  messagingSenderId: '969868679384',
  appId: '1:969868679384:web:4c764f82b6f863fec75fad',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const SignInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((re) => {
      console.lor(re)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default firebase
