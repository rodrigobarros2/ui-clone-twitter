import React from 'react';
import Feed from '../Feed';

import * as S from './styles';

const ProfilePage: React.FC = () => {
	return (
		<S.Container>
			<S.Banner>
				<S.Avatar />
			</S.Banner>
				<S.ProfileData>
				<S.EditButton outlined> Editar perfil</S.EditButton>

					<h1>Rodrigo Barros</h1>
					<h2>@rodrigobarros2</h2>

					<p>Developer at Rodrigo Barros</p>

					<ul>
						<li>
							<S.LocationIcon />
							Canto do Buriti Piauí
						</li>
						<li>
							<S.CakeIcon />
							Nascido(a) em 14 de junho de 1996
						</li>
					</ul>

					<S.Followage>
						<span>
							seguindo <strong>94</strong>
						</span>
						<span>
							<strong>682</strong> seguidores
						</span>
					</S.Followage>
				</S.ProfileData>
				<Feed />
		</S.Container>
	);
}

export default ProfilePage;
