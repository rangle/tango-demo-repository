import React from 'react';
import { Page } from '../components/Page';
import { Header } from '@repo/ui';

export const Home: React.FC = () => (
    <Page
        header={<Header user={undefined} onLogin={() => { }} onLogout={() => { }} onCreateAccount={() => { }} />}
    >
        <h1>Welcome to Acme</h1>
        <p>Discover our amazing products and services.</p>
    </Page>
);