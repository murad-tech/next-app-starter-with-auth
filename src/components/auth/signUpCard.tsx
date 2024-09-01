import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AuthFlow } from '@/types/authFlow';
import { EmailSignUpForm } from '@/components/auth/emailSignUpForm';
import { GoogleAuthButton } from '@/components/auth/socialButtons';

interface SignUpCardProps {
	setState: (state: AuthFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
	return (
		<Card className='w-full h-full p-8'>
			<CardHeader>
				<CardTitle>Register to continue</CardTitle>
				<CardDescription>Use your email or google account to Register</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6 px-0 pb-0'>
				<EmailSignUpForm />
				<Separator />
				<GoogleAuthButton />
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
