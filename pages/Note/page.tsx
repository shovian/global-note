'use client';

import { setNote, subscribeNote } from '@/handlers/note';
import { useEffect, useRef, useState } from 'react';

export default function Note() {
	const [content, setContent] = useState('');
	const [caretPos, setCaretPos] = useState(5);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const target: any = document.getElementById('note');
	useEffect(() => {
		subscribeNote(setContent);
		console.log(process.env.FIREBASE_API_KEY);
	}, []);
	return (
		<>
			<textarea
				ref={textAreaRef}
				className="w-full h-full p-8 bg-inherit"
				value={content}
				onInput={(e: any) => {
					console.log(e.target.selectionEnd);

					// target.selectionEnd = e.target.selectionEnd;

					console.log(textAreaRef);

					// target.focus();
					// target.setSelectionRange(0, caretPos);
				}}
				onChange={(e) => {
					setNote({ content: e.target.value });
					!!textAreaRef.current && textAreaRef.current.focus();
					!!textAreaRef.current && textAreaRef.current.setSelectionRange(5, 5);
					// target.focus();
					// target.setSelectionRange(caretPos, caretPos);
				}}
				name=""
				id="note"
			></textarea>
		</>
	);
}
