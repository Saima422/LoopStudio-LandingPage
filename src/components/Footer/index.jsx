import footerLogo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer({ data }) {
	return (
		<div className='bg-black text-gray-100 py-10 sm:py-5 sm:flex sm:justify-around'>
			<div className='sm:w-64 mid:w-80'>
				<img
					src={footerLogo}
					alt='footerLogo'
					className='w-28 mx-auto my-5 sm:mx-8 mid:mx-3'
				/>
				<div className='flex flex-col sm:flex-row sm:mx-6 sm:flex-wrap mid:mx-1'>
					{data.map((item, index) => (
						<a
							href='/'
							className='text-xs capitalize my-2 sm:mx-2'
							key={index}>
							{item}
						</a>
					))}
				</div>
			</div>
			<div className='sm:w-40 mid:w-48'>
				<div className='flex justify-around w-32 sm:w-28 mx-auto my-6 sm:mb-5'>
					<img src={facebook} alt='facebook' />
					<img src={twitter} alt='twitter' />
					<img src={pinterest} alt='pinterest' />
					<img src={instagram} alt='instagram' />
				</div>
				<p className='text-xs text-gray-300 mb-6 sm:mb-1 tracking-wider sm:w-32 sm:mx-auto mid:w-48'>
					&copy; 2021 Loopstudios. All rights reserved.
				</p>
			</div>
		</div>
	);
}

export default Footer;
