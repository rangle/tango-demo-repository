import React from 'react';
import { Page } from '../components/Page';
import { Header } from '@repo/ui';

export const ProductList: React.FC = () => (
    <Page
        header={<Header user={undefined} onLogin={() => { }} onLogout={() => { }} onCreateAccount={() => { }} />}
    >
        <h1>Our Products</h1>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
    </Page>
);