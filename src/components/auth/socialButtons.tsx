import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';

const GoogleAuthButton = () => {
	const handleGoogleSignIn = async () => {
		try {
			console.log('handleGoogleSignIn');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='flex flex-col gap-y-2'>
			<Button
				variant='outline'
				className='w-full relative'
				onClick={handleGoogleSignIn}
				disabled={false}
			>
				<FcGoogle className='absolute left-3 size-5' />
				Continue with Google
			</Button>
		</div>
	);
};

export { GoogleAuthButton };
