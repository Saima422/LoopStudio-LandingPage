import CreationCard from '../CreationCard';

function CreatorSection({ data }) {
	return (
		<div className='w-full pb-16 sm:pb-12'>
				<h1 className='text-3xl uppercase my-5 sm:my-2 sm:text-2xl xl:text-3xl'>
					Our Creations
				</h1>
				<div className='mid:flex mid:flex-wrap lm:w-100 lm:mx-auto 2xl:w-105'>
					{data.map((item, index) => (
						<CreationCard key={index} data={item} />
					))}
				</div>
				<button className='uppercase border-gray-900 border-2 px-8 py-2 text-xs tracking-widest'>
					see all
				</button>
			</div>
	);
}

export default CreatorSection;
