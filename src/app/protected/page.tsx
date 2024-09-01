'use client';
import { redirect } from 'next/navigation';

export default function ProtectedPage() {
	const isAuthenticated = false; // TODO: replace with actual authentication

	if (!isAuthenticated) {
		redirect('/');
		return null;
	}

	return (
		<div className='text-3xl text-pink-500 font-bold text-center h-screen flex items-center justify-center'>
			This page can see only authenticated users
		</div>
	);
}
