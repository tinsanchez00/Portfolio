import React from 'react';
import {
	BottomBox,
	Container,
	Separator,
	SkillsBox,
	TopBox,
} from '../styles/About.styles';
import SkillCard from './SkillCard';

const About = () => {
	return (
		<Container>
			<TopBox>
				<h2>About Me</h2>
				<Separator></Separator>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Voluptas numquam aliquid excepturi iste nulla dicta!
					Perspiciatis nemo eius eum, nostrum eos saepe porro in
					reiciendis possimus voluptate repellendus quos doloremque!
				</p>
			</TopBox>

			<BottomBox>
				<h3>Skills</h3>
				<SkillsBox>
					{[
						1,
						2,
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						10,
						11,
						12,
						13,
						14,
						15,
						16,
						17,
					].map((e) => {
						return <SkillCard d={e} />;
					})}
				</SkillsBox>
			</BottomBox>
		</Container>
	);
};

export default About;
