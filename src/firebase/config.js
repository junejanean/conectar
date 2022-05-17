import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { getAuth } from 'firebase/compat/auth';

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
firebase.initializeApp(firebaseConfig); /// v8
const app = initializeApp(firebaseConfig); //firebase v9

// init service
// const projectFirestore = firebase.firestore(); v8
const projectFirestore = getFirestore(app); // v9
const projectAuth = firebase.auth(); // v8;
// const projectAuth = getAuth(); // v9

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
	signInWithPopup(projectAuth, provider)
		.then((result) => {
			const name = result.user.displayName;
			const email = result.user.email;
			const profilePic = result.user.photoURL;

			localStorage.setItem('name', name);
			localStorage.setItem('email', email);
			localStorage.setItem('profilePic', profilePic);
		})
		.catch((error) => {
			console.log(error);
		});
};

export { signInWithGoogle, projectFirestore, projectAuth };
