import React from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import logo from '../logo.svg';

const NavComp = () => {
    return (
        <div>
            <Segment inverted>
            <Header as='h2' >
                <Image circular src={logo} /> Ridwan Aditya Saputra
            </Header>
            </Segment>
        </div>
    )
}

export default NavComp
