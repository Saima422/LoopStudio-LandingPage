import leaderImage from '../../assets/mobile/image-interactive.jpg';

function LeaderSection() {
    return (
		<div className='w-full'>
			<div className='py-16 sm:py-10 md:flex mx-auto md:w-96'>
				<img
					src={leaderImage}
					alt='leaderImage'
					className='w-72 my-6 mx-auto sm:my-1 md:w-96 md:-ml-20'
				/>
				<div className='md:w-80 md:bg-white md:-ml-28 md:h-44 md:mr-10 md:mt-24  lm:h-48'>
					<h1 className='uppercase py-4 text-3xl sm:text-2xl md:py-2 lm:py-5'>
						The leader in interactive VR
					</h1>
					<p className='w-64 sm:w-96 text-center mx-auto text-gray-500 text-sm px-2 md:w-72 md:text-xs lm:w-80'>
						Founded in 2011, Loopstudios has been producing
						world-class virtual reality projects for some of the
						best companies around the globe. Our award-winning
						creations have transformed businesses through digital
						experiences that bind to their brand.
					</p>
				</div>
			</div>
		</div>
	);
}

export default LeaderSection;