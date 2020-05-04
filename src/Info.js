import React from 'react';
import { Button, Card } from 'react-bootstrap';

export const Info = () => {
	return (
		<>
			<h1>App Information</h1>{' '}
			<p>All the statistics you see are live and up to date via the COVID19API. If you have any suggestions for for new features or ideas for better user accessibility feel free to submit an issue on the github repo below.</p>
			<Card>
				<Card.Header>
					Github Repo
				</Card.Header>
				<Card.Body>
					CV-TRACKER19 <Button href='https://github.com/elafarga10/Project-2-CV-Tracker'> Info </Button>
				</Card.Body>
			</Card>
		</>
	);
};
