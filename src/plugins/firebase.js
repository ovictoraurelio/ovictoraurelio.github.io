// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCnxY7-Yj7Vi2s37KPnaXFzrf9YHbd69iU',
  authDomain: 'ovictoraurelio.firebaseapp.com',
  databaseURL: 'https://ovictoraurelio.firebaseio.com',
  projectId: 'ovictoraurelio',
  storageBucket: 'ovictoraurelio.appspot.com',
  messagingSenderId: '736449130143',
  appId: '1:736449130143:web:4800d93f79dc9ae93d3caa',
  measurementId: 'G-ENMQKKBPL8'
}

const app = initializeApp(firebaseConfig)
getAnalytics(app)
