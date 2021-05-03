import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import HeroImage from './HeroImage';

import { AiFillThunderbolt } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import ButtonPlain from './ButtonPlain';
import { useFadeOutOnScroll } from './hooks/fadeOutOnScroll';

export const Section = styled.section`
	height: 650px;
	width: 100%;
	padding: 0 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	transition: opacity 200ms;

	.heroinfo {
		@media only screen and (max-width: 500px) {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	.title {
		font-size: 4.6em;
		line-height: 0.6em;
		margin-bottom: 15px;
		cursor: default;

		@media only screen and (max-width: 500px) {
			font-size: 4em;
			text-align: center;
		}
	}

	.subtitle {
		font-size: 3em;
		color: var(--soft-clr);
		margin-bottom: 100px;
		cursor: default;

		@media only screen and (max-width: 500px) {
			font-size: 1.8em;
			text-align: center;
		}
	}

	.sanchez {
		white-space: pre;
		word-wrap: none;
	}

	.z-effect {
		display: inline-block;
		white-space: pre;
		word-wrap: none;
		transition: transform 400ms;
		cursor: pointer;
	}

	.z-effect:active {
		transform: rotateY(180deg);
	}

	.character-effect {
		transition: color 500ms;
	}

	.character-effect:hover {
		color: var(--primary-clr);
		transition: color 140ms;
	}

	.icon-box {
		display: inline-block;
		border: 1px dotted red;
		height: 1em;
		width: 1em;
	}

	a {
		text-decoration: none;
		display: inline-block;
	}
`;

const TitleIcon = styled(AiFillThunderbolt)`
	position: relative;
	top: 10px;
	left: 5px;
	transition: color 0.3s;

	&:hover {
		animation: wiggle 3s ease-in-out infinite;
		animation-delay: 2s;
		color: var(--soft-clr);
		transition: color 1s 0.5s;
	}

	@keyframes wiggle {
		0% {
			transform: rotateZ(0deg);
		}

		4% {
			transform: rotateZ(-10deg);
		}

		16% {
			transform: rotateZ(370deg);
		}

		20%,
		100% {
			transform: rotateZ(360deg);
		}
	}
`;

const Hero = () => {
	const opacity = useFadeOutOnScroll(160, 400);

	return (
		opacity > 0 && (
			<Section style={{ opacity }}>
				<div className='heroinfo'>
					<h1 className='title'>
						Martin{' '}
						<span className='sanchez'>
							Sanche<span className='z-effect'>z</span>
							<TitleIcon id='title-icon' />
						</span>
					</h1>
					<h3 className='subtitle'>
						{'Full Stack Developer'.split('').map((c) => {
							return (
								<span className='character-effect'>{c}</span>
							);
						})}
					</h3>
					<a
						href='resume.pdf'
						target='_blank'
						title='open resume in a new tab'
						rel='noreferrer'
					>
						<ButtonPlain>
							Resume <FiDownload />
						</ButtonPlain>
					</a>
				</div>
				<HeroImage id='heroimg' />
			</Section>
		)
	);
};

export default Hero;
