import footerLogo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer({ data }) {
	return (
		<div class='bg-black text-gray-100 py-10'>
			<img
				src={footerLogo}
				alt='footerLogo'
				className='w-28 mx-auto my-5'
			/>
			<div className='flex flex-col'>
				{data.map((item, index) => (
					<a href='/' className='text-xs capitalize my-2'>
						{item}
					</a>
				))}
			</div>
			<div className="flex justify-around w-32 mx-auto my-6">
				<img src={facebook} alt='facebook' />
				<img src={twitter} alt='twitter' />
				<img src={pinterest} alt='pinterest' />
				<img src={instagram} alt='instagram' />
            </div>
            <p className="text-xs text-gray-300 mb-6">&copy; 2021 Loopstudios. All rights reserved.</p>
		</div>
	);
}

export default Footer;
