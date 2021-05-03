import React from 'react';
import styled from 'styled-components';

export const SeparatorStyle = styled.div`
	width: 100%;
	border: 2px solid var(--high-clr);
	border-radius: 10px;
	margin: 25px 0;
	box-shadow: 0 -4px 8px #00000060;

	&.thin {
		border: 1px solid var(--high-clr);
	}
`;

const Separator = ({ className }) => {
	return <SeparatorStyle className={className}></SeparatorStyle>;
};

export default Separator;
