import React from 'react';
import styled from 'styled-components';
import simpleIcons from 'simple-icons';

const SkillCard = ({ icon }) => {
	let isShort = icon.length < 8;

	return (
		<Container>
			<div
				className='icon-container'
				dangerouslySetInnerHTML={{
					__html: simpleIcons.get(icon).svg,
				}}
			></div>
			<span className={`icon-name ${isShort ? 'short' : ''}`}>
				{icon}
			</span>
		</Container>
	);
};

export const Container = styled.div`
	background-color: #e0e0e0;
	border-radius: 6px;
	height: 90px;
	width: 90px;
	padding: 10px;
	position: relative;
	border: 2px solid #a0a0a0;

	.icon-container {
		opacity: 1;
		transition: opacity 380ms;
	}

	.icon-name {
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		text-align: center;
		transform: translate(-50%, -50%);
		text-overflow: clip;
		word-break: break-all;
		color: black;
		font-weight: bold;
		font-size: 0.9em;
		transition: opacity 200ms;
	}

	.short {
		font-size: 1.2em;
	}

	svg {
		fill: var(--dark-clr);
	}

	&:hover .icon-container {
		opacity: 0.1;
		transition: opacity 200ms 300ms linear;
	}

	&:hover .icon-name {
		opacity: 1;
		transition: opacity 400ms 400ms ease-out;
	}
`;

export default SkillCard;
