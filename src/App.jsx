import React from 'react';
import NavBar from './Component/NavBar';
import Hero from './Component/Hero';
import Analytics from './Component/Analytics';
import NewsLetter from './Component/NewsLetter';
import Cards from './Component/Cards';
import Footer from './Component/Footer';

function App() {
	return (
		<div>
			<NavBar />
			<Hero />
			<Analytics />
			<NewsLetter />
			<Cards />
			<Footer />
		</div>
	);
}

export default App;
