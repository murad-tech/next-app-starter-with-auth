import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export const EmailSignUpForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<form className='space-y-3'>
			<Input
				type='email'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				disabled={false}
				required
			/>
			<Input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				disabled={false}
				required
			/>
			<Input
				type='password'
				placeholder='Confirm password'
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				disabled={false}
				required
			/>
			<Button type='submit' className='w-full'>
				Login
			</Button>
		</form>
	);
};
