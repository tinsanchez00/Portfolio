import React from 'react';
import styled from 'styled-components';

const Nav = () => {
	return (
		<Container>
			<ul>
				<li>
					<button onClick={() => jump('SKILLS')}>SKILLS</button>
				</li>
				<li>
					<button onClick={() => jump('PROJECTS')}>PROJECTS</button>
				</li>
				<li>
					<button onClick={() => jump('CONTACT')}>CONTACT</button>
				</li>
			</ul>
		</Container>
	);
};

const jump = (target) => {
	let el = document.getElementById(target);
	if (!el) return;
	let elDistanceToTop = window.pageYOffset + el.getBoundingClientRect().top;
	window.scrollTo(0, elDistanceToTop - 60);
};

export const Container = styled.nav`
	width: 100%;
	height: 50px;
	display: flex;
	position: fixed;
	background-color: var(--dark-alpha-clr);
	z-index: 10;
	justify-content: center;
	align-items: center;
	top: 0;

	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;

		li {
			margin-left: 50px;

			@media only screen and (max-width: 500px) {
				margin-left: 25px;
			}
		}

		li:first-child {
			margin-left: 0;
		}
	}

	button {
		background-color: transparent;
		border: transparent;
		color: var(--soft-clr);
		font-weight: 600;
		font-size: 1.3em;
		letter-spacing: 3px;
		cursor: pointer;
		position: relative;
		transition: color 300ms;

		&:active {
			color: var(--primary-clr);
			transition: color 100ms;
		}

		@media only screen and (max-width: 500px) {
			font-size: 1.1em;
		}

		&::after {
			content: '';
			display: block;
			position: absolute;
			inset: 1.4em 0 0 0;
			transform: scaleX(0);
			transform-origin: bottom right;
			transition: transform 0.25s ease;
			background: rgb(223, 0, 60);
			background: linear-gradient(
				90deg,
				rgba(223, 0, 60, 1) 0%,
				rgba(254, 65, 116, 1) 100%
			);
			z-index: -1;
		}

		&:hover::after,
		&:active::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}
`;

export default Nav;
