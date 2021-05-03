import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return <FooterStyled></FooterStyled>;
};

export const FooterStyled = styled.footer`
	width: 100%;
	height: 120px;
	background-color: var(--darker-clr);
`;

export default Footer;
