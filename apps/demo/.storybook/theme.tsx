import React, { useEffect } from 'react';
import type { Decorator } from '@storybook/react';

const DEFAULT_BODY_CLASSES = ['sb-main-padded sb-show-main'];

export const ThemeDecorator: Decorator = (Story, context) => {
    const brand = context.globals.brands;
    const mode = context.globals.modes;
    const density = context.globals.density;
    useEffect(() => {
        document.body.classList.value = [
            DEFAULT_BODY_CLASSES,
            brand,
            mode,
            density,
        ].join(' ');
    }, [brand, mode, density]);
    return <Story />;
};
