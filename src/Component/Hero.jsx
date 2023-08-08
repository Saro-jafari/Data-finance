import Typed from 'react-typed';
const Hero = () => {
	return (
		<div className="text-white">
			<div className="max-w-[800px] mt-[-96px] w-full h-screen text-center flex flex-col justify-center">
				<p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
				<h className="md:text-2xl sm:text-3xl font-bold md:py-6">Grow with data</h>
				<div className="felx justify-center items-center ">
					<p className="md:2xl sm:text-4xl text-xl font-bold py-4">Fast , flexible financing for</p>
					<Typed
						className="md:text-3xl md:pl-4 sm:text-4xl text-xl font-bold pl-2"
						strings={['BTB', 'BTC', 'SASS']}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</div>
				<p className="md:text-xl text-xl font-bold text-gray-500">
					Monitor your data analytics to increase revenue for BTB,BTC & SASS platforms.
				</p>
				<button className="bg-[#00df9a] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black  ">Get Started</button>
			</div>
		</div>
	);
};

export default Hero;
