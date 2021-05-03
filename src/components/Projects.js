import React from 'react';
import styled from 'styled-components';
import projects from '../projectsObj';
import Project from './global/Project';
import Separator from './global/Separator';

const Projects = () => {
	return (
		<Container id='PROJECTS'>
			<h2>Projects</h2>
			{projects.map((projObj, i) => (
				<Project projObj={projObj} key={'proj' + i}></Project>
			))}
		</Container>
	);
};

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2% 8%;
	justify-content: space-between;

	h2 {
		margin-top: 10px;
	}
`;

export const ProjectContainer = styled.div`
	width: auto;
`;

export default Projects;
