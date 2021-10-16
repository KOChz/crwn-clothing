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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
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
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

export default firebase
