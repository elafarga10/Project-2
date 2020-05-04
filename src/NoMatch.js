import React from 'react';
import { Search } from './Form';

export const NoMatch = (props) => (
	<div>
		<h2>Sorry no match was found</h2>
		<p>
			(Make sure to type the full country name or check out the countries page
			if you're not sure)
		</p>
		<Search
			className='search'
			countryName={props.countryName}
			handleChange={props.handleChange}
			clearButton={props.clearButton}
			handleKeyPress={props.handleKeyPress}
		/>
	</div>
);
