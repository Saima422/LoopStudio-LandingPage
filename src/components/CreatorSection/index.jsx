import CreationCard from '../CreationCard';

function CreatorSection({ data }) {
	return (
		<div className="pb-16">
			<h1 className='text-3xl uppercase my-5'>Our Creations</h1>
			{data.map((item, index) => (
				<CreationCard key={index} data={item} />
			))}
			<button className='uppercase border-gray-900 border-2 px-8 py-2 text-xs tracking-widest'>
				see all
			</button>
		</div>
	);
}

export default CreatorSection;
