import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
	background-color: transparent;
	width: 200px;
	border: 2px outset var(--primary-clr);
	border-radius: 8px;
	color: var(--primary-clr);
	font-size: 1.8em;
	padding: 6px 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	transition: transform 220ms, background-color 300ms ease-in,
		box-shadow 220ms;
	box-shadow: 0px 0px 2px 0px #00000010;

	&.sm {
		font-size: 1.4em;
		width: 160px;
		padding: 3px 6px;
	}

	&:hover {
		transform: translate(-2px, -1px);
		box-shadow: 2px 1px 4px 1px #00000060;
		cursor: pointer;
		background-color: #ffffff12;
		transition: transform 60ms, box-shadow 60ms;
	}

	&:active {
		transform: translate(1px, 1px);
		box-shadow: 0px 0px 2px 0px #00000010;
		background-color: #ffffff40;
	}

	@media only screen and (max-width: 450px) {
		&.sm {
			width: 140px;
		}
	}
`;

const ButtonPlain = ({ children, className }) => {
	return <Button className={className}>{children}</Button>;
};

export default ButtonPlain;
