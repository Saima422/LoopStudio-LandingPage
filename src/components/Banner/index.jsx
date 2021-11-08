import bannerImage from '../../assets/mobile/image-hero.jpg';
import desktopBannerImage from '../../assets/desktop/image-hero.jpg';
import useWindowDimensions from '../../utils/windowHook';

function Banner() {
	const { width } = useWindowDimensions();

    return (
		<div className='relative'>
			<img
				src={width < 640 ? bannerImage : desktopBannerImage}
				alt='banner'
			/>
			<h1 className='absolute border-2 top-40 sm:top-14 text-gray-100 uppercase text-3xl xsm:text-4xl font-light text-left mx-3 sm:mx-24 p-4 sm:w-80'>
				Immersive experiences that deliver
			</h1>
		</div>
	);
}

export default Banner;
