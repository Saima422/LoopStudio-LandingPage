function CreationCard({ data }) {
	return (
		<div className='mx-4 relative my-10 sm:my-6'>
			<img src={data.imageUrl} alt={data.title} className='' />
			<span className=' absolute w-full h-full bg-gray-900 bg-opacity-30 z-10 top-0 left-0'></span>
			<h1 className='absolute top-8 sm:top-28 text-gray-100 uppercase text-xl sm:text-2xl w-28 sm:w-80 text-left mx-4 z-20'>
				{data.title}
			</h1>
		</div>
	);
}

export default CreationCard;
