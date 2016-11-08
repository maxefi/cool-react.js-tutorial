// explicitly indicate needed components from the libs
// so webpack only build needed components instead of the whole lib
import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import HelloWorldPage from 'components/HelloWorldPage';

import './bootstrap.css';

// pure stateless function components
// no need for shouldComponentUpdate to update
function App() {
    return (
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span>Hello World</span>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav navbar>
                        <NavItem>Time</NavItem>
                        <NavItem>Counters</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Grid>
                <HelloWorldPage/>
            </Grid>
        </div>
    );
}

export default App;
