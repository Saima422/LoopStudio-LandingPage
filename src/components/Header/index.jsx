import logo from '../../assets/logo.svg';
import hamBurger from '../../assets/icon-hamburger.svg';

function Header() {
	return (
		<div
			className='
				absolute
				w-full
				flex
				justify-between
				z-10'>
			{/* border-2 border-gray-900 */}
			<img src={logo} alt='LoopStudio-Logo' className='w-28 my-6 mx-4' />
			<img
				src={hamBurger}
				alt='hamburger'
				className='h-3.5 my-auto mx-4'
			/>
		</div>
	);
}

export default Header;
