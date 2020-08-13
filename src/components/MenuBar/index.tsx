import React from 'react';

import Button from '../Button';

import * as S from './styles';

const MenuBar: React.FC = () => {
	return (
		<S.Container>
			<S.Topside>
				<S.Logo />

				<S.MenuButton>
					<S.HomeIcon />
					<span>Página Inicial</span>
				</S.MenuButton>

				<S.MenuButton>
					<S.BeelIcon />
					<span>Notificações</span>
				</S.MenuButton>

				<S.MenuButton>
					<S.EmailIcon />
					<span>Mensagens</span>
				</S.MenuButton>

				<S.MenuButton>
					<S.FavoriteIcon />
					<span>Favoritados</span>
				</S.MenuButton>

				<S.MenuButton className="active">
					<S.ProfileIcon />
					<span>Perfil</span>
				</S.MenuButton>

				<Button>
					<span>Tweetar</span>
				</Button>
			</S.Topside>
		</S.Container>
	);
}

export default MenuBar;
