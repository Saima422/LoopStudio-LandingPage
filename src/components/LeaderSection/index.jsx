import leaderImage from '../../assets/mobile/image-interactive.jpg';

function LeaderSection() {
    return (
		<div className='w-full py-16'>
			<img
				src={leaderImage}
				alt='leaderImage'
				className='w-72 my-6 mx-auto'
			/>
			<h1 className='uppercase py-4 text-3xl'>
				The leader in interactive VR
			</h1>
			<p className="w-64 text-center mx-auto text-gray-500 text-sm px-2">
				Founded in 2011, Loopstudios has been producing world-class
				virtual reality projects for some of the best companies around
				the globe. Our award-winning creations have transformed
				businesses through digital experiences that bind to their brand.
			</p>
		</div>
	);
}

export default LeaderSection;