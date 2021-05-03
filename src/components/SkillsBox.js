import React from 'react';
import styled from 'styled-components';
import SkillCard from './SkillCard';
import { Fade } from 'react-reveal';

const iconArr = [
	'HTML5',
	'CSS3',
	'JavaScript',
	'React',
	'Redux',
	'Node.js',
	'Express',
	'PostgreSQL',
	'GraphQL',
	'Sass',
	'Jest',
	'java',
	'C++',
];

const SkillsBox = () => {
	return (
		<List>
			{iconArr.map((icon, i) => (
				<Fade
					top
					delay={i * 100}
					duration={800 + i * 25}
					distance='60%'
				>
					<SkillCard icon={icon} />
				</Fade>
			))}
		</List>
	);
};

export const List = styled.div`
	margin: 10px 0;
	width: 100%;
	/* 	border: 1px dotted red; */
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	& > * {
		margin: 5px;
	}
`;

export default SkillsBox;
