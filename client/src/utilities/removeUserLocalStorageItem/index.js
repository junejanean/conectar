export function removeUserLocalStorageItem() {
	localStorage.removeItem('name');
	localStorage.removeItem('email');
	localStorage.removeItem('profilePic');
}

export default removeUserLocalStorageItem;
