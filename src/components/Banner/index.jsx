import bannerImage from '../../assets/mobile/image-hero.jpg';

function Banner() {
    return (
		<div className="relative">
			<img src={bannerImage} alt='banner' />
			<div className="absolute border-2 top-40 text-gray-100 uppercase text-3xl font-light text-left mx-4 p-5"> Immersive experiences that deliver</div>
		</div>
	);
}

export default Banner;
