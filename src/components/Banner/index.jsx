import bannerImage from '../../assets/mobile/image-hero.jpg';

function Banner() {
    return (
		<div className="relative">
			<img src={bannerImage} alt='banner' />
			<h1 className="absolute border-2 top-40 text-gray-100 uppercase text-4xl font-light text-left mx-3 p-4">Immersive experiences that deliver</h1>
		</div>
	);
}

export default Banner;
