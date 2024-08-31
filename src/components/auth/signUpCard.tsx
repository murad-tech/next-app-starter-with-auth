import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FcGoogle } from 'react-icons/fc';
import { AuthFlow } from '@/types/authFlow';
import { useState } from 'react';

interface SignUpCardProps {
	setState: (state: AuthFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<Card className='w-full h-full p-8'>
			<CardHeader>
				<CardTitle>Register to continue</CardTitle>
				<CardDescription>Use your email or google account to Register</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6 px-0 pb-0'>
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
				<Separator />
				<div className='flex flex-col gap-y-2'>
					<Button disabled={false} variant='outline' className='w-full relative'>
						<FcGoogle className='absolute left-3 size-5' />
						Continue with Google
					</Button>
				</div>
				<p className='text-center text-sm text-muted-foreground'>
					Already have an account?{' '}
					<span
						onClick={() => setState('signIn')}
						className='text-sky-700 hover:underline cursor-pointer'
					>
						Sign in
					</span>
				</p>
			</CardContent>
		</Card>
	);
};
