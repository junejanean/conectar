// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import {
// 	getAuth,
// 	GoogleAuthProvider,
// 	signInWithPopup,
// } from 'firebase/compat/auth';

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCFR2hyvUv66pzLojC8VqZt5FrWEfmO-W4',
	authDomain: 'conectar-75e91.firebaseapp.com',
	projectId: 'conectar-75e91',
	storageBucket: 'conectar-75e91.appspot.com',
	messagingSenderId: '171042601427',
	appId: '1:171042601427:web:e48ede167a71d100245726',
	measurementId: 'G-NWBJTLCHES',
};

// init firebase
//const app = firebase.initializeApp(firebaseConfig); // old version
const app = initializeApp(firebaseConfig); //firebase v9

const projectAuth = getAuth(app);

// init service
// const projectFirestore = firebase.firestore();
// const projectAuth = firebase.auth();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
	signInWithPopup(projectAuth, provider)
		.then((result) => {
			console.log(result);
		})
		.catch((error) => {
			console.log(error);
		});
};

export { getFirestore, projectAuth };
