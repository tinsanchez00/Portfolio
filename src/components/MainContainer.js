import React from 'react';
import styled from 'styled-components';

const MainContainer = ({ children }) => {
	return (
		<OuterContainer>
			{children.map((child) => {
				return <InnerContainer>{child}</InnerContainer>;
			})}
		</OuterContainer>
	);
};

export const OuterContainer = styled.section`
	width: 100%;
	padding: 4%;
	padding-bottom: 0;
	background: rgb(84, 55, 61);
	background: linear-gradient(
		180deg,
		rgba(84, 55, 61, 1) 0%,
		rgba(49, 33, 33, 1) 100%
	);
	border-top: 5px solid var(--high-clr);
	border-bottom: 5px solid var(--high-clr);
`;

export const InnerContainer = styled.div`
	border: 3px solid var(--high-clr);
	border-radius: 10px;
	background-color: var(--dark-clr);
	margin-bottom: 4%;
`;

export default MainContainer;
