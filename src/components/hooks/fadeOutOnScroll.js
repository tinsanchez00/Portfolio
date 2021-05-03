import { useLayoutEffect, useState } from 'react';

export const useFadeOutOnScroll = (start, length) => {
	const [opacity, setOpacity] = useState(1);

	useLayoutEffect(() => {
		if (typeof window !== 'undefined') {
			window.onscroll = () => {
				let currentScrollPos = window.pageYOffset;

				if (currentScrollPos <= start) return setOpacity(1);
				if (currentScrollPos >= start + length) return setOpacity(0);

				let dist = currentScrollPos - start;
				let porcentage = (1 - dist / length).toFixed(1);
				setOpacity(porcentage);
			};
		}
	}, []);

	return opacity;
};
