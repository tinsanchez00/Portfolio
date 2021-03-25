import React from 'react';
import styled from 'styled-components';

import ButtonPrimary from './ButtonPrimary';
import HeroImage from './HeroImage';

import { AiFillThunderbolt } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';

export const Section = styled.section`
	height: 100vh;
	padding: 0 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.title {
		font-size: 6em;
	}

	.subtitle {
		font-size: 3em;
		color: var(--soft-clr);
		margin-bottom: 100px;
	}
`;

const TitleIcon = styled(AiFillThunderbolt)`
	position: relative;
	top: 10px;
	left: 5px;
`;

const Hero = () => {
	return (
		<Section>
			<div>
				<h1 className='title'>
					Martin Sanchez
					<TitleIcon />
				</h1>
				<h3 className='subtitle'>Full Stack Developer</h3>
				<ButtonPrimary>
					Resume <FiDownload />
				</ButtonPrimary>
			</div>
			<HeroImage />
		</Section>
	);
};

export default Hero;
