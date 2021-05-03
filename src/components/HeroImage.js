import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Container = styled.span`
	box-sizing: content-box;
	display: inline-block;
	border: 4px solid var(--primary-clr);
	border-radius: 50%;
	width: 230px;
	height: 230px;
	margin-top: 50px; /* 30px forehead space */
	box-shadow: 0 0 12px 10px #00000070 inset;
	background-color: #00000030;
	position: relative;
	transition: border 300ms;

	&:hover {
		border: 4px solid var(--high-clr);
	}

	@media only screen and (max-width: 800px) {
		display: none;
	}

	.ballcircle {
		border-radius: 50%;
		width: 270px;
		height: 270px;
		position: absolute;
		top: -20px;
		left: -20px;
		animation: rotate 2s ease infinite;
		z-index: -1;
	}

	.ball {
		width: 10px;
		height: 10px;
		background-color: var(--primary-clr);
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 50%;
	}
	.darkball {
		background-color: var(--high-clr);
	}

	@keyframes rotate {
		from {
			transform: rotateZ(0deg);
		}
		to {
			transform: rotateZ(360deg);
		}
	}

	@media only screen and (min-width: 1600px) {
		width: 330px;
		height: 330px;
		margin-top: 80px;

		.ballcircle {
			width: 375px;
			height: 375px;
		}
	}
`;

export const CircleContainer = styled.span`
	box-sizing: content-box;
	display: inline-block;
	width: 230px;
	height: 280px; /* by 30px higher */
	margin-top: -50px; /* and offset by 30px */
	background: none no-repeat center bottom / 230px;
	border-radius: 0 0 115px 115px;
	background-image: url('imgs/PPicSmall.png');

	@media only screen and (min-width: 1600px) {
		width: 330px;
		height: 410px;
		margin-top: -80px;
		background: none no-repeat center bottom / 330px;
		background-image: url('imgs/PPicSmall.png');
		border-radius: 0 0 165px 165px;
	}
`;

const HeroImage = () => {
	const [balls, setBalls] = useState([]);
	const spawn = () => {
		if (balls.length < 16) setBalls((p) => [...p, p.length]);
	};

	useEffect(() => {
		let timeout = setTimeout(() => {
			setBalls([]);
		}, 10000);
		return () => clearTimeout(timeout);
	}, [balls]);

	return (
		<Container onClick={spawn} id='heroimgcontainer'>
			{balls.map((e) => {
				return (
					<div className='ballcircle' key={`ball${e}`}>
						<div
							className={`ball ${e % 2 === 0 ? 'darkball' : ''}`}
						></div>
					</div>
				);
			})}
			<CircleContainer></CircleContainer>
		</Container>
	);
};

export default HeroImage;
