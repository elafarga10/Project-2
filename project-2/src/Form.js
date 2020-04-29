import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.search-bar {
		margin-top: 120px;
	}

	.form {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	* {
		margin: 0 auto;
	}

	@media (min-width: 900px) {
		.search-bar {
			margin-bottom: 120px;
		}
	}
`;

export const Search = (props) => {
	return (
		<Styles>
			<Form className='search-bar'>
				<Form.Control
					onChange={props.handleChange}
					size='md'
					type='text'
					placeholder='Search by country'
					value={props.countryName}
				/>

				<LinkContainer to={`/countries/${props.countryName}`}>
					<Button onClick={props.handleSearch}>Search</Button>
				</LinkContainer>
			</Form>
		</Styles>
	);
};
