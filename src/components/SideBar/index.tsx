import React from 'react';
import List from '../List'
import FollowSuggestion from '../FollowSuggestion';

import * as S from './styles';

const SideBar: React.FC = () => {
	return (
		<S.Container>
			<S.SearchWrapper>
				<S.SearchInput placeholder="Buscar no Twitter" />
				<S.SearchIcons />
			</S.SearchWrapper>
			<S.Body>
				<List
					title="Talvez você curta"
					elements={[
						<FollowSuggestion
							name="Luiz Batanero"
							nickname="@luizbatanero"
						/>,
						<FollowSuggestion name="Luke Morales" nickname="@lukemorales" />,
						<FollowSuggestion
							name="Camila Magalhães"
							nickname="@camilaamgl"
						/>,
					]}
				/>
				<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non odio enim hic eius, accusantium a eaque, facilis et laborum nobis aspernatur consectetur fugit sit libero nam in. Optio, incidunt rem?</p>
			</S.Body>
		</S.Container >
	);
}

export default SideBar;
