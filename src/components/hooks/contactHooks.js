import { useState } from 'react';

export const useContactForm = () => {
	const [input, setInput] = useState({
		name: '',
		email: '',
		message: '',
	});

	const submit = (ev) => {
		ev.preventDefault();
		let ok = true;
		let entries = Object.entries(input);
		entries.forEach(([key, value]) => {
			if (!/\S/.test(value)) {
				ok = false;
				document.querySelector('#' + key)?.classList.add('danger');
			}
		});
		if (ok) alert('sent');
	};

	const handleInput = (ev) => {
		let target = ev.target;
		target.classList.remove('danger');
		setInput((prev) => ({
			...prev,
			[target.name]: target.value,
		}));
	};

	return [input, handleInput, submit];
};
