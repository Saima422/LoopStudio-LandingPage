import logo from '../../assets/logo.svg';
import hamBurger from '../../assets/icon-hamburger.svg';
import useWindowDimensions from '../../utils/windowHook';

function Header({data}) {
	const { width } = useWindowDimensions();

	return (
		<div
			className='
				absolute
				w-full
				flex
				justify-between
				z-10'>
			<img src={logo} alt='LoopStudio-Logo' className='w-28 my-6 mx-4' />
			{width < 768 ? (
				<img
					src={hamBurger}
					alt='hamburger'
					className='h-3.5 my-auto mx-4'
				/>
			) : (
				<ul className='flex my-5'>
					{data.map((item, index) => (
						<li
							key={index}
							className='mx-3 text-gray-100 capitalize'>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Header;
