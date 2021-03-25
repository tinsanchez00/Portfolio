import styled from 'styled-components';

export const Separator = styled.div`
	width: 80%;
	border: 2px solid var(--high-clr);
	border-radius: 10px;
	margin: 10px 0;
`;

export const TopBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	h2 {
		font-size: 3em;
	}

	p {
		font-size: 1.3em;
	}

	${Separator} {
		margin-bottom: 20px;
	}
`;
export const BottomBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		font-size: 2em;
		margin-bottom: 10px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 500px;
	max-height: 800px;
	height: 70vh;
	align-items: center;
	padding: 2% 8%;
	justify-content: space-between;
`;

export const SkillsBox = styled.div`
	width: 100%;
	height: 150px;
	border: 1px dotted red;
	display: flex;
	flex-wrap: wrap;
`;
