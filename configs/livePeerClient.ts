import { ThemeConfig, createReactClient, studioProvider } from '@livepeer/react';

export const client = createReactClient({
    provider: studioProvider({ apiKey: import.meta.env.VITE_STUDIO_API_KEY }),
});

export const livePeerTheme: ThemeConfig = {
    colors: {
        accent: 'rgb(0, 145, 255)',
        containerBorderColor: 'rgba(0, 145, 255, 0.9)',
    },
    fonts: {
        display: 'Inter',
    },
};
