import React from 'react';
import styled from 'styled-components';

const Projects = () => {
	return (
		<Container>
			<Header>
				<h2>Projects</h2>
				<Separator></Separator>
			</Header>
		</Container>
	);
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2% 8%;
	justify-content: space-between;
`;

export const Separator = styled.div`
	width: 80%;
	border: 2px solid var(--high-clr);
	border-radius: 10px;
	margin: 10px 0;
`;

export const Header = styled.div`
	border: 1px dotted red;
`;

export default Projects;
