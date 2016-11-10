// explicitly indicate needed components from the libs
// so webpack only build needed components instead of the whole lib
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isUserSignedIn } from 'redux/models/user';
import { Link } from 'react-router';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

import './bootstrap.css';

const propTypes = {
    children: PropTypes.node,
    userSignedIn: PropTypes.bool.isRequired
};

class App extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Hello World</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav navbar>
                            {this.props.userSignedIn && (
                                <LinkContainer to='/time'>
                                    <NavItem>Time</NavItem>
                                </LinkContainer>
                            )}
                            <LinkContainer to='/counters'>
                                <NavItem>Counters</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
    return { userSignedIn: isUserSignedIn(state) };
}

export default connect(mapStateToProps)(App);
