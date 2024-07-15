'use client';

import { useState } from 'react';
import Note from '../Note/page';

export default function MainPage() {
	const [pageTransition, setPageTransition] = useState(false);
	const [started, setStarted] = useState(false);
	function handleTransition() {
		setPageTransition(true);
		setTimeout(() => {
			setPageTransition(false);
		}, 4000);
	}
	return (
		<>
			{pageTransition ? (
				<div className="bg-white dark:bg-black fixed top-0 left-0 flex min-h-[100dvh] w-full justify-center">
					<div className="flex relative items-center justify-center">
						<div className="w-[400px]">
							<div
								style={{ animationFillMode: 'forwards' }}
								className="block w-[400px] animate-textintro  transition-all overflow-hidden text-nowrap"
							>
								<div className="w-[400px]">
									<div className="justify-center w-full overflow-visible flex">
										Selamat Datang, Tuan Shovian
										<span className="ml-1 animate-blip">_</span>
									</div>
								</div>
							</div>
						</div>
						<div className=" flex absolute ">
							<div
								style={{ animationFillMode: 'forwards' }}
								className="animate-intro h-10 w-2 bg-black dark:bg-white"
							></div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
			<div className="h-full w-full flex items-center justify-center">
				{!started ? (
					<button
						onClick={() => {
							handleTransition();
							setStarted(true);
						}}
						className="underline"
					>
						Start
					</button>
				) : (
					<Note></Note>
				)}
			</div>
		</>
	);
}
