import Link from 'next/link';
import { Button } from './ui/button';

const Navbar = () => {
	return (
		<nav className='bg-gray-800 p-4 flex justify-between items-center'>
			<div className='text-white text-lg'>
				<Link href='/'>Next Starter with Auth</Link>
			</div>
			<div className='space-x-4'>
				<Link href='/login'>
					<Button variant='default'>Login</Button>
				</Link>
				<Link href='/register'>
					<Button variant='outline'>Register</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
