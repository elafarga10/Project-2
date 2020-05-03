import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.search-bar {
		margin-top: 20px;
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
			margin-bottom: 20px;
		}
	}
`;

export const SearchBar = () => {
	return (
		<Styles>
			<Form className='search-bar'>
				<InputGroup>
					<Form.Control size='md' type='text' placeholder='Search by country' />
					<InputGroup.Append>
						<Button type='reset' variant='outline-secondary'>
							X
						</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form>
		</Styles>
	);
};
