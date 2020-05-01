import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Search } from './Form';
import styled from 'styled-components';

const Styles = styled.div`
	.stats {
		display: flex;
		margin: ;
		justify-content: space-between;
	}
	.global {
		text-align: center;
		padding-bottom: 50px;
		padding-top: 50px;
	}
	.total {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
`;

export const Home = (props) => {
	return (
		<Styles>
			<h1 className='global'>Global Stats</h1>
			<CardDeck className='stats'>
				<Card className='total'>
					<Card.Header>Total Confirmed Cases:</Card.Header>{' '}
					<Card.Body as='h1'>
						{props.data.TotalConfirmed.toLocaleString()}{' '}
					</Card.Body>
				</Card>
				<Card className='total'>
					<Card.Header>Total Deaths:</Card.Header>{' '}
					<Card.Body as='h1'>
						{props.data.TotalDeaths.toLocaleString()}{' '}
					</Card.Body>
				</Card>
				<Card className='total'>
					<Card.Header>Total Recovered:</Card.Header>{' '}
					<Card.Body as='h1'>
						{props.data.TotalRecovered.toLocaleString()}{' '}
					</Card.Body>
				</Card>
			</CardDeck>
			<Search
				countryName={props.countryName}
				handleChange={props.handleChange}
				resetState={props.resetState}
				clearButton={props.clearButton}
			/>
		</Styles>
	);
};
