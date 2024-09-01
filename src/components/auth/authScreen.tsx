'use client';

import { AuthFlow } from '@/types/authFlow';
import { useState } from 'react';
import { SignInCard } from './signInCard';
import { SignUpCard } from './signUpCard';
import { usePathname } from 'next/navigation';

export const AuthScreen = () => {
	const pathname = usePathname();
	const pageType = pathname === '/register' ? 'signUp' : 'signIn';
	const [state, setState] = useState<AuthFlow>(pageType);

	return (
		<div className='h-full flex items-center justify-center bg-[#87ebac]'>
			<div className='md:h-auto md:w-[420px]'>
				{state === 'signIn' ? (
					<SignInCard setState={setState} />
				) : (
					<SignUpCard setState={setState} />
				)}
			</div>
		</div>
	);
};
