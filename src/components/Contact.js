import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import ButtonPlain from './ButtonPlain';
import { useContactForm } from './hooks/contactHooks';

const arrSocials = [
	'https://www.linkedin.com/in/martin-sanchez-dev/',
	'https://github.com/tinsanchez00',
	'mailto: martinsanchezspagnuolo@gmail.com',
];

const Contact = () => {
	const [input, isSent, handleInput, handleSubmit] = useContactForm();

	return (
		<Main id='CONTACT'>
			<h2>Contact Me</h2>
			<Socials>
				{arrSocials.map((url) => (
					<SocialIcon
						classname='socialicon'
						url={url}
						target='_blank'
						bgColor='#f0e0e0'
					/>
				))}
			</Socials>
			<Form onSubmit={handleSubmit}>
				<InputRow>
					<SmallInputBox>
						<label htmlFor='name'>Name</label>
						<Input
							type='text'
							id='name'
							name='name'
							value={input.name}
							onChange={handleInput}
						/>
					</SmallInputBox>
					<SmallInputBox>
						<label htmlFor='email'>Email</label>
						<Input
							type='email'
							id='email'
							name='email'
							value={input.email}
							onChange={handleInput}
						/>
					</SmallInputBox>
				</InputRow>
				<TextBox>
					<label htmlFor='message'>Message</label>
					<TextArea
						name='message'
						id='message'
						rows='6'
						value={input.message}
						onChange={handleInput}
					></TextArea>
				</TextBox>
				{isSent ? (
					<ButtonPlain className='sm'>Sent!👍</ButtonPlain>
				) : (
					<ButtonPlain className='sm'>Send</ButtonPlain>
				)}
			</Form>
		</Main>
	);
};

export const Main = styled.div`
	width: 100%;
	min-height: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		margin-top: 90px;
		margin-bottom: 20px;
	}

	label {
		margin-bottom: 5px;
	}

	.danger {
		border: 2px solid red;
	}

	button {
		margin-top: 40px;
	}
`;

export const Form = styled.form`
	height: 100%;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin: 60px 0;
`;

export const TextBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 30px;

	&:focus-within > label {
		font-weight: 600;
	}
`;

export const SmallInputBox = styled.div`
	width: 48%;
	display: flex;
	flex-direction: column;

	&:focus-within > label {
		font-weight: 600;
	}
`;

export const InputRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const Input = styled.input`
	padding: 10px;
	background-color: var(--darker-clr);
	border: 2px inset var(--high-clr);
	border-radius: 6px;
	color: var(--light-clr);
`;

export const TextArea = styled.textarea`
	padding: 10px;
	width: 100%;
	background-color: var(--darker-clr);
	border: 2px inset var(--high-clr);
	border-radius: 6px;
	resize: none;
	color: var(--light-clr);
`;

export const Socials = styled.div`
	display: flex;
	justify-content: center;
	padding-left: 10px;
	.social-icon {
		margin-right: 10px;
	}

	.social-icon:hover .social-svg {
		border: 2px solid var(--darker-clr);
	}
`;

export default Contact;
