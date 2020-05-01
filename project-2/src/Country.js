import React from 'react';
import { Card, CardDeck, Accordion, Button } from 'react-bootstrap';
import { Search } from './Form';
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
	.view {
		padding-top: 30px;
	}
	.toggle-button {
		text-align: center;
	}
	.new-totals {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin: 50px;
	}
	.search {
		padding-top: 0px;
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
						<Card.Body as='h1'>{props.cases.toLocaleString()} </Card.Body>
					</Card>
					<Card className='total'>
						<Card.Header>Total Deaths:</Card.Header>{' '}
						<Card.Body as='h1'>{props.deaths.toLocaleString()} </Card.Body>
					</Card>
					<Card className='total'>
						<Card.Header>Total Recovered:</Card.Header>{' '}
						<Card.Body as='h1'>{props.recovered.toLocaleString()} </Card.Body>
					</Card>
				</CardDeck>
				<Accordion className='view' defaultActiveKey='0'>
					<Card>
						<Card.Header>
							<Accordion.Toggle
								as={Button}
								variant='link'
								className='text-center'>
								<h6 style={{ textAlign: 'center' }}>View More</h6>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse>
							<CardDeck>
								<Card className='new-totals'>
									<Card.Header>New Confirmed Cases:</Card.Header>{' '}
									<Card.Body as='h1'>
										{props.newCases.toLocaleString()}{' '}
									</Card.Body>
								</Card>
								<Card className='new-totals'>
									<Card.Header>New Deaths:</Card.Header>{' '}
									<Card.Body as='h1'>
										{props.newDeaths.toLocaleString()}{' '}
									</Card.Body>
								</Card>
								<Card className='new-totals'>
									<Card.Header>New Recovered:</Card.Header>{' '}
									<Card.Body as='h1'>
										{props.newRecovered.toLocaleString()}{' '}
									</Card.Body>
								</Card>
							</CardDeck>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				<Search
					className='search'
					countryName={props.countryName}
					handleChange={props.handleChange}
					resetState={props.resetState}
					clearButton={props.clearButton}
				/>
			</Styles>
		</div>
	);
};
