import React from 'react';
import styled from 'styled-components';

const MainContainer = ({ children }) => {
	return (
		<OuterContainer>
			{children.map((child, i) => {
				return (
					<InnerContainer key={`MainContainer_${i}`}>
						{child}
					</InnerContainer>
				);
			})}
		</OuterContainer>
	);
};

export const OuterContainer = styled.section`
	width: 100%;
	padding: 4%;
	padding-bottom: 0;
	margin-top: 650px;
	background: rgb(84, 55, 61);
	background: linear-gradient(
		180deg,
		rgba(84, 55, 61, 1) 0%,
		rgba(49, 33, 33, 1) 100%
	);
	border-top: 5px solid var(--high-clr);
	border-bottom: 5px solid var(--high-clr);
	box-shadow: 2px 1px 7px 6px #00000080;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media only screen and (min-width: 1600px) {
		margin-top: 960px;
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	border: 3px solid var(--high-clr);
	border-radius: 10px;
	background-color: var(--dark-clr);
	margin-bottom: 4%;
	box-shadow: 0 0 6px 4px #00000060 inset;
	max-width: 1500px;
	width: inherit;
`;

export default MainContainer;
