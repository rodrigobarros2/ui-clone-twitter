import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List'
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import * as S from './styles';

const SideBar: React.FC = () => {
	return (
		<S.Container>
			<S.SearchWrapper>
				<S.SearchInput placeholder="Buscar no Twitter" />
				<S.SearchIcons />
			</S.SearchWrapper>
			<StickyBox>
				<S.Body>
					<List
						title="Talvez você curta"
						elements={[
							<FollowSuggestion
								name="Rodrigo Barros"
								nickname="@rodrigobarros3"
							/>,
							<FollowSuggestion
								name="Rodrigo Barros"
								nickname="@rodrigobarros3" />,
							<FollowSuggestion
								name="Rodrigo Barros"
								nickname="@rodrigobarros3"
							/>,
						]}
					/>
					<List
						title="O que está acontecendo"
						elements={[
							<News />,
							<News />,
							<News />,
							<News />,
							<News />,
						]}
					/>
				</S.Body>
			</StickyBox>
		</S.Container >
	);
}

export default SideBar;
