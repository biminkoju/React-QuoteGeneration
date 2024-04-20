import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
	const [quote, setQuote] = useState(null);
	const [author, setAuthor] = useState(null);

	const getQuote = async () => {
		axios
			.get('https://api.quotable.io/random')
			.then((response) => {
				setQuote(response.data.content);
				setAuthor(response.data.author);
			})
			.catch((error) => {
				return (
					<>
						<p>Err:{error}</p>
					</>
				);
			});
	};
	useEffect(() => {
		getQuote();
	}, []);

	return (
		<div>
			<h1>Quotes</h1>
			<p>{quote}</p>
			<p>Author: {author}</p>
			<button onClick={getQuote}>New Quote</button>
		</div>
	);
}
