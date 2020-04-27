import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .stats{
        display: flex;
        margin: ;
        justify-content: space-between;
    }
    .global {
        text-align: center;
        padding-bottom: 50px;
    }
`;

export const Home = (props) => {
	return (
		<Styles>
			<h1 className='global'>Global Stats</h1>
			<CardDeck className="stats">
				<Card>
					<Card.Header>Total Confirmed Cases:</Card.Header>{' '}
					<Card.Body as='h1'>
						{props.data.TotalConfirmed.toLocaleString()}{' '}
					</Card.Body>
				</Card>
				<Card>
					<Card.Header>Total Deaths:</Card.Header>{' '}
					<Card.Body as='h1'>
						{props.data.TotalDeaths.toLocaleString()}{' '}
					</Card.Body>
				</Card>
				<Card>
					<Card.Header>Total Recovered:</Card.Header>{' '}
					<Card.Body as='h1'>
						{props.data.TotalRecovered.toLocaleString()}{' '}
					</Card.Body>
				</Card>
			</CardDeck>
		</Styles>
	);
};

export default Home;
