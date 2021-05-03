import React from 'react';
import styled from 'styled-components';
import Separator from './global/Separator';
import SkillsBox from './SkillsBox';

const About = () => {
	return (
		<Container id='SKILLS'>
			<TopBox>
				<h2>About Me</h2>
				{/* <Separator></Separator> */}
				<ul>
					<li>
						I enjoy learning cool stuff on the{' '}
						<span className='nobreak'>internet🚀</span>
					</li>
					<li>
						I'm looking for interesting projects to{' '}
						<span className='nobreak'>work on💻</span>
					</li>
					<li>
						I can work independently but much rather work with a{' '}
						<span className='nobreak'>motivated team👥</span>
					</li>
					<li>
						Fan of Card Games &{' '}
						<span className='nobreak'>Roguelikes🎮</span>
					</li>
				</ul>
			</TopBox>

			<BottomBox>
				<h3>Skills</h3>
				<SkillsBox />
			</BottomBox>
		</Container>
	);
};

export const TopBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	ul {
		list-style: none;
		margin-top: 20px;
	}

	li {
		font-weight: 500;
		font-size: 1.3em;
	}

	h2 {
		margin-top: 10px;
	}

	.nobreak {
		white-space: pre;
	}
`;
export const BottomBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 15px;

	h3 {
		margin-top: 1em;
	}
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	max-height: 1000px;
	align-items: center;
	padding: 15px 8%;
	justify-content: space-between;
`;

export default About;
