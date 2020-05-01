import React from 'react';
import{ Search }from './Form';

export const NoMatch = (props) => (
					<div>
						<h2>Sorry no match was found</h2>
						<Search
							className='search'
							countryName={props.countryName}
							handleChange={props.handleChange}
						/>
					</div>
				);
