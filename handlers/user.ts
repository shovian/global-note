import { db } from '@/libs/firebase';
import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from 'firebase/firestore';

export async function getUser(p0: string, hashedPassword: string) {
	const docRef = collection(db, 'user');
	const docSnap = await getDocs(query(docRef, where('username', '==', p0)));
	console.log('in here');

	if (!docSnap.empty) {
		const arr: any[] = [];
		docSnap.forEach((doc) => {
			console.log('Document data:', doc.data());
			arr.push(doc.data());
		});
		return arr[0];
	} else {
		// docSnap.data() will be undefined in this case
		console.log('No such document!');
		return null;
	}
}
