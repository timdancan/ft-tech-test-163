/** You can submit this test using either Handlebars or JSX as a templating engine. This is the file to work in if you would like to use JSX */

import React from 'react';
import Instruments from "./Instruments";

export default function Home(props) {

	return (
		<main className='app'>
			<h1 className='title'>Financial Times</h1>
			<Instruments data={props.content}/>
		</main>
	);
};
