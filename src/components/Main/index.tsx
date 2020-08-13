import React from 'react';
import ProfilePage from '../ProfilePage'

import * as S from './styles';

const Layout: React.FC = () => {
	return (
		<S.Container>
			<S.Header>
				<button>
					<S.BackIcon />
				</button>
				<S.ProfileInfo>
					<strong>Rodrigo Barros</strong>
					<span>612 Tweets</span>
				</S.ProfileInfo>
			</S.Header>

			<ProfilePage />

			<S.BottomMenu>
				<S.HomeIcon className="active" />
				<S.SearchIcons />
				<S.BellIcons />
				<S.EmailIcon />
			</S.BottomMenu>
		</S.Container>

	);
}

export default Layout;
