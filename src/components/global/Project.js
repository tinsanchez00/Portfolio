import React from 'react';
import styled from 'styled-components';
import ButtonPlain from '../ButtonPlain';
import { Fade } from 'react-reveal';

const Project = ({ projObj: { title, description, live, repo, img } }) => {
	return (
		<Main>
			<Info>
				<Fade left distance='35px' delay={150}>
					<h3>{title}</h3>
				</Fade>
				<Fade left distance='35px' delay={350}>
					<pre>{description}</pre>
				</Fade>
				<Fade bottom distance='35px' delay={350}>
					<Buttons>
						<a href={live} target='_blank' rel='noreferrer'>
							<ButtonPlain className='sm'>Live</ButtonPlain>
						</a>
						<a href={repo} target='_blank' rel='noreferrer'>
							<ButtonPlain className='sm'>Repo</ButtonPlain>
						</a>
					</Buttons>
				</Fade>
			</Info>
			<Fade right distance='35px' duration={1200}>
				<Image>
					<img src={img} alt={title} />
				</Image>
			</Fade>
		</Main>
	);
};

Project.defaultProps = {
	title: 'Project X',
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque mollitia saepe aliquid officia similique perferendis minus delectus quasi quo molestias qui eaque facere, commodi inventore culpa vero quas maiores!',
	live: 'google.com',
	rep: 'github.com',
	img: 'https://picsum.photos/500/500',
};

export const Main = styled.div`
	display: flex;
	width: auto;
	margin: 45px 0;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 1px 7px 3px var(--darker-clr) inset;
	border-radius: 6px;
	padding: 15px;

	@media only screen and (max-width: 1100px) {
		flex-direction: column;
	}
`;
export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	padding: 10px 20px;
	padding-bottom: 15px;

	h3 {
		margin-top: 10px;
	}

	pre {
		margin: 20px 0;
		font-size: 1.4em;
		font-weight: bold;
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	@media only screen and (max-width: 1100px) {
		width: auto;
	}
`;
export const Buttons = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: auto;
	width: 100%;

	button:first-child {
		margin-right: 10px;
	}

	a {
		text-decoration: none;
	}
`;
export const Image = styled.div`
	overflow: hidden;
	width: 600px;
	margin: 40px;
	border: 1px solid var(--high-clr);
	border-radius: 30px;
	transition: border-radius 500ms ease-out;
	box-shadow: 3px 2px 4px 2px #00000050;

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	&:hover {
		border-radius: 4px;
	}

	@media only screen and (max-width: 1100px) {
		width: auto;
		max-width: 650px;
		max-height: 420px;
		margin: 15px;
	}
`;

export default Project;
