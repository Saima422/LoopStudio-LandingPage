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
				className='w-full 2xl:h-98'
			/>
			<h1 className='banner-h1'>
				Immersive experiences that deliver
			</h1>
		</div>
	);
}

export default Banner;
