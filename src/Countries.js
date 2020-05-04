import React from 'react';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	h1 {
		padding-bottom: 15px;
	}
`;


export const Countries = (props) => {
	let list = props.countries.map((country) => {
		return <ListGroup.Item key={country.Country}>{country.Country}</ListGroup.Item>;
	});
	return (
		<Styles>
			<h1>Countries List:</h1>
			<ListGroup>{list}</ListGroup>
		</Styles>
	);
};
