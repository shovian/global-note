import { db } from '@/libs/firebase';
import {
	collection,
	doc,
	getDoc,
	onSnapshot,
	setDoc,
} from 'firebase/firestore';

export async function getNote() {
	const docRef = doc(db, 'note', 'mainNote');
	const docSnap = await getDoc(docRef);
	return docSnap.data()!.content;
}
export async function setNote(data: any) {
	const docRef = doc(db, 'note', 'mainNote');
	setDoc(docRef, data);
}
export async function subscribeNote(callback: any) {
	const unsub = onSnapshot(doc(db, 'note', 'mainNote'), (doc) => {
		callback(doc.data()!.content);
	});
}
