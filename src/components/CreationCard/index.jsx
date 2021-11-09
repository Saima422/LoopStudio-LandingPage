import useWindowDimensions from "../../utils/windowHook";

function CreationCard({ data }) {
	const { width } = useWindowDimensions();

	return (
		<div className='mx-4 relative my-10 sm:my-6 mid:mx-auto 2xl:mx-8'>
			<img src={width < 695 ? data.imageUrl : data.desktopUrl} alt={data.title} className='mid:w-36' />
			<span className='.creationCard-span'></span>
			<h1 className='creationCard-h1'>
				{data.title}
			</h1>
		</div>
	);
}

export default CreationCard;
