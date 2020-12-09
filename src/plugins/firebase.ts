import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)
firebase.auth().useDeviceLanguage()

if (location.hostname === 'localhost') {
  firebase.auth().useEmulator('http://localhost:9099/')
  firebase.firestore().useEmulator('localhost', 5002)
}

Vue.prototype.$firebase = firebase

export default firebase
