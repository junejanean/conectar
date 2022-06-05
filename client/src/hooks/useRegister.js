import { useState, useEffect } from 'react';
import {
	createUserWithEmailAndPassword,
	updateProfile,
	getAuth,
} from 'firebase/auth';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useRegister = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();
	console.log(isCancelled);

	const register = async (displayName, email, password) => {
		setError(null);
		setIsPending(true);

		try {
			//register user
			const res = await createUserWithEmailAndPassword(
				projectAuth,
				email,
				password
			);

			if (!res) {
				throw new Error('Could not complete registration');
			}

			// add name to user

			const auth = getAuth();

			await updateProfile(auth.currentUser, { displayName });

			// // dispatch login action
			dispatch({
				type: 'LOGIN',
				payload: {
					...res.user,
					displayName,
				},
			});

			//update state
			if (!isCancelled) {
				setIsPending(false);
				setError(null);
			}
		} catch (err) {
			if (!isCancelled) {
				if (err.message.includes('WEAK_PASSWORD')) {
					console.log('weak');
				}
				console.log(err.message);
				setError(err.message);
				setIsPending(false);
			}

			throw err;
		}
	};

	useEffect(() => {
		setIsCancelled(false);
		return () => setIsCancelled(true);
	}, []);

	return { register, error, isPending };
};
