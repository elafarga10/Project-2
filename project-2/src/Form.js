import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
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

	@media (min-width: 900px){
		.search-bar {
			margin-bottom: 120px;
		}
	}
`;

export const Search = () => {
	return (
		<Styles>
			<Form className='search-bar' float='center'>
				<Row>
					<Col>
						{' '}
						<Form.Control
							size='md'
							type='text'
							placeholder='Search by country'
						/>
					</Col>
					<Col>
						<Button>Search</Button>
					</Col>
				</Row>
			</Form>
		</Styles>
	);
};
