function CreationCard({ data }) {
	return (
		<div className='mx-4 relative my-10'>
			<img src={data.imageUrl} alt={data.title} className='' />
			<span className=' absolute w-full h-full bg-gray-900 bg-opacity-30 z-10 top-0 left-0'></span>
			<h1 className='absolute top-8 text-gray-100 uppercase text-xl w-28 text-left mx-4 z-20'>
				{data.title}
			</h1>
		</div>
	);
}

export default CreationCard;
