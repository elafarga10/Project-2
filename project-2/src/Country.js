import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.stats {
		display: flex;
		margin: ;
		justify-content: space-between;
	}
	.countryName {
		text-align: center;
		padding-bottom: 50px;
		padding-top: 50px;
	}
	.total {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`;

export const Country = (props) => {
		return (
			<div>
				<Styles>
					<h1 className='countryName'>{props.name}</h1>
					<CardDeck className='stats'>
						<Card className='total'>
							<Card.Header>Total Confirmed Cases:</Card.Header>{' '}
							<Card.Body as='h1'>
								{props.cases.toLocaleString()}{' '}
							</Card.Body>
						</Card>
						<Card className='total'>
							<Card.Header>Total Deaths:</Card.Header>{' '}
							<Card.Body as='h1'>
								{props.deaths.toLocaleString()}{' '}
							</Card.Body>
						</Card>
						<Card className='total'>
							<Card.Header>Total Recovered:</Card.Header>{' '}
							<Card.Body as='h1'>
								{props.recovered.toLocaleString()}{' '}
							</Card.Body>
						</Card>
					</CardDeck>
				</Styles>
			</div>
		);
	
};
