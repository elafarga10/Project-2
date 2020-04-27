import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export const Jumbo = () => {
	return( <Jumbotron fluid>
		<Container>
			<h1>Welcome to Corona-Info</h1>
			<p>Daily updates on corona-virus related stats</p>
		</Container>
	</Jumbotron> )
};
