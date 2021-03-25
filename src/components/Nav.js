import React from 'react';
import styled from 'styled-components';

export const NAV_HEIGHT = 50;

const Nav = () => {
	return (
		<Container>
			<ul>
				<li>
					<a href='/#skills'>SKILLS</a>
				</li>
				<li>
					<a href='/#projects'>PROJECTS</a>
				</li>
				<li>
					<a href='/#contact'>CONTACT</a>
				</li>
			</ul>
		</Container>
	);
};

export const Container = styled.nav`
	width: 100%;
	height: ${NAV_HEIGHT}px;
	display: flex;
	position: fixed;
	background-color: var(--dark-alpha-clr);
	z-index: 10;
	justify-content: center;
	align-items: center;

	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;

		li {
			margin-left: 50px;
		}
		li:first-child {
			margin-left: 0;
		}
	}

	a {
		text-decoration: none;
		color: var(--soft-clr);
		font-weight: 600;
		letter-spacing: 3px;
	}
`;

export default Nav;
