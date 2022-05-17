import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';
import { removeUserLocalStorageItem } from '../utilities';

export const useLogin = () => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setError(null);
		setIsPending(true);

		// reset local storage items

		removeUserLocalStorageItem();

		try {
			// login
			const res = await signInWithEmailAndPassword(
				projectAuth,
				email,
				password
			);
			console.log(res.user);

			// dispatch login action
			dispatch({ type: 'LOGIN', payload: res.user });

			//update state
			if (!isCancelled) {
				setIsPending(false);
				setError(null);
			}
		} catch (err) {
			console.log(err);
			if (!isCancelled) {
				setError(err.message);
				setIsPending(false);
			}
		}
	};

	useEffect(() => {
		setIsCancelled(false);
		return () => setIsCancelled(true);
	}, []);

	return { login, isPending, error };
};
