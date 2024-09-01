import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const EmailSignInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form className='space-y-3'>
			<Input
				type='email'
				placeholder='Email'
				name='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				disabled={false}
				required
			/>
			<Input
				type='password'
				placeholder='Password'
				name='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				disabled={false}
				required
			/>
			<Button type='submit' className='w-full'>
				Login
			</Button>
		</form>
	);
};
