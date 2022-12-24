import React from 'react';
import { Link } from 'gatsby';
import { activePage } from './layout.module.css';
import styled from 'styled-components';

const StyledNavigation = styled.div`
    flex-basis: clamp(200px, 20%, 500px);
    border-right: 1px solid black;
    overflow-y: auto;
`;

export function Navigation() {
    return (
        <StyledNavigation>
            <nav>
                <ul>
                    <li><Link to="/getting-started" activeClassName={activePage}>Getting Started</Link></li>
                    <li><Link to="/store" activeClassName={activePage}>Setting up your store</Link></li>
                    <li><Link to="/triggers" activeClassName={activePage}>Working with triggers</Link></li>
                </ul>
            </nav>
        </StyledNavigation>
    )
}