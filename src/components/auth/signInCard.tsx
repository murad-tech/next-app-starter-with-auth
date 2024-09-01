import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AuthFlow } from '@/types/authFlow';
import { EmailSignInForm } from '@/components/auth/emailSignInForm';
import { GoogleAuthButton } from '@/components/auth/socialButtons';

interface SignInCardProps {
	setState: (state: AuthFlow) => void;
}

export const SignInCard = ({ setState }: SignInCardProps) => {
	return (
		<Card className='w-full h-full p-8'>
			<CardHeader>
				<CardTitle>Login to continue</CardTitle>
				<CardDescription>Use your email or google account to login</CardDescription>
			</CardHeader>
			<CardContent className='space-y-6 px-0 pb-0'>
				<EmailSignInForm />
				<Separator />
				<GoogleAuthButton />
				<p className='text-center text-sm text-muted-foreground'>
					Don&apos;t have an account?{' '}
					<span
						onClick={() => setState('signUp')}
						className='text-sky-700 hover:underline cursor-pointer'
					>
						Sign up
					</span>
				</p>
			</CardContent>
		</Card>
	);
};
