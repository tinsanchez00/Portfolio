import { useState } from 'react';
import emailjs, { init } from 'emailjs-com';

export const useContactForm = () => {
	const [input, setInput] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [isSent, setIsSent] = useState(false);

	const submit = (ev) => {
		ev.preventDefault();
		if (isSent) return;

		let ok = true;
		let entries = Object.entries(input);
		entries.forEach(([key, value]) => {
			if (!/\S/.test(value)) {
				ok = false;
				document.querySelector('#' + key)?.classList.add('danger');
			}
		});

		if (ok) {
			setIsSent(true);
			init(process.env.REACT_APP_USERID);
			console.log(process.env.REACT_APP_SERVICE);
			emailjs
				.send(
					process.env.REACT_APP_SERVICE,
					process.env.REACT_APP_TEMPLATE,
					{
						from_name: input.name,
						from_email: input.email,
						message: input.message,
					},
					process.env.REACT_APP_USERID
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	const handleInput = (ev) => {
		let target = ev.target;
		target.classList.remove('danger');
		setInput((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	return [input, isSent, handleInput, submit];
};
