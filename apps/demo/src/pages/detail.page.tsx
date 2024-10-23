import React from 'react';
import { Page } from '../components/Page';
import { Header } from '@repo/ui';

export const ProductDetail: React.FC = () => (
    <Page
        header={<Header user={undefined} onLogin={() => { }} onLogout={() => { }} onCreateAccount={() => { }} />}
    >
        <h1>Product Details</h1>
        <h2>Product Name</h2>
        <p>This is a detailed description of the product.</p>
        <button>Add to Cart</button>
    </Page>
);