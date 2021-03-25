import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
	border: 2px solid var(--primary-clr);
	width: 20vw;
	height: 20vw;
	border-radius: 50%;
	@media (max-width: 1300px) {
		& {
			display: none;
		}
	}
`;

const HeroImage = () => {
	return (
		<Container>
			<div></div>
		</Container>
	);
};

export default HeroImage;
