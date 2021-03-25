import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
	background-color: transparent;
	width: 200px;
	border: 2px solid var(--primary-clr);
	border-radius: 8px;
	color: var(--primary-clr);
	font-size: 1.8em;
	padding: 6px 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const ButtonPrimary = ({ children }) => {
	return <Button>{children}</Button>;
};

export default ButtonPrimary;
