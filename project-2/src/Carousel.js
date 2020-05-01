import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import styled from 'styled-components';

const Styles = styled.div`
	.carousel {
		height: 400px;
		width: 1800px;
		margin: 0;
	}

	.overlay {
		background-color: #000;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}

	.carousel-icon li {
		display: none;
	}

	@media (min-width: 900px) {
		.carousel {
			width: 100%;
			height: 400px;
		}
		.carousel-item {
			width: 100%;
			height: 400px;
		}
		img {
			width: 100%;
			height: 100%;
			aspectratio: 1;
		}
	}
`;

export const Slideshow = () => {
	return (
		<Styles>
			<Carousel
				as='div'
				pause='false'
				prevIcon={<span aria-hidden='true' className='carousel-icon' />}
				nextIcon={<span aria-hidden='true' className='carousel-icon' />}>
				<Carousel.Item>
					<Carousel.Caption>
						<h1>Welcome to CV Tracker</h1>
						<p>Search by country for corona-virus information</p>
					</Carousel.Caption>
					<div className='overlay'></div>
					<img className='d-block w-100' src={slide1} alt='red door' />
				</Carousel.Item>
				<Carousel.Item>
					<Carousel.Caption>
						<h1>Search by country</h1>
						<p>Search from over 240 countries for the latest statistics</p>
					</Carousel.Caption>
					<div className='overlay'></div>
					<img
						className='d-block w-100'
						src={slide2}
						alt='woman wearing mask'
					/>
				</Carousel.Item>
				<Carousel.Item>
					<Carousel.Caption>
						<h1>Stay Home. Save Lives.</h1>
						<p>Practice social-distancing</p>
					</Carousel.Caption>
					<div className='overlay'></div>
					<img
						className='d-block w-100'
						src={slide3}
						alt='white surgical mask'
					/>
				</Carousel.Item>
			</Carousel>
		</Styles>
	);
};
