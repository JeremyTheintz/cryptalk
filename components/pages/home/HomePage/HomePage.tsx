import { ChatContainer } from '@components/chat/ChatContainer/ChatContainer';
import Meta from '@components/shared/Meta';
import { useAppHeight } from '@hooks/useAppHeight/useAppHeight';
import { FC } from 'react';
import { StyledMainContainer } from './HomePage.styles';
import { IHomePage } from './HomePage.type';

const HomePage: FC<IHomePage> = () => {
	useAppHeight();

	return (
		<>
			<Meta
				title='Cryptalk'
				description='🤖 User-friendly crypto swaps via intuitive conversational interface. #ETHTokyo2023 #Cryptalk'
			/>
			<div>
				<StyledMainContainer className='main-container'>
					<ChatContainer />
				</StyledMainContainer>

				<footer></footer>
			</div>
		</>
	);
};

export { HomePage };
