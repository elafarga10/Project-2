import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
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
		display: flex;
		flex-direction: row;
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
				<InputGroup>
					<Form.Control
						onChange={props.handleChange}
						size='md'
						type='text'
						placeholder='Search by country'
						value={props.countryName}
						onKeyPress={props.handleKeyPress}
					/>
					<InputGroup.Append>
						<Button
							type='reset'
							variant='outline-secondary'
							onClick={props.clearButton}>
							X
						</Button>
					</InputGroup.Append>
					<InputGroup.Append>
						<LinkContainer to={`/countries/${props.countryName}`}>
							<Button onClick={props.resetState}>Search</Button>
						</LinkContainer>
					</InputGroup.Append>
				</InputGroup>
			</Form>
		</Styles>
	);
};
