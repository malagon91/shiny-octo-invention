import React, { useState } from 'react';
import { GlobalStyle } from '../../styles/GlobalStyles';

const App = () => {
	const [languages, setLanguage] = useState('MX');

	return (
		<div>
			<GlobalStyle />
			<h1>danna</h1>
		</div>
	);
};

export default App;
