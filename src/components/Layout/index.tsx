import React from 'react';

import Main from '../Main';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<Main />
				{/* <MenuBar /> */}
				{/* <SideBar /> */}
			</Wrapper>
		</Container>
	);
}

export default Layout;
