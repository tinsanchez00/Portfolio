import React from 'react';
import styled from 'styled-components';

const SkillCard = ({ d }) => {
	return (
		<Container>
			<div>{d}</div>
		</Container>
	);
};

export const Container = styled.div`
	background-color: #f0f0f0;
	border: 1px solid blue;
	height: auto;
	width: auto;
	min-width: 80px;
	max-width: 120px;
	flex-grow: 1;
	margin: 10px;
`;

export default SkillCard;
