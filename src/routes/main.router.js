import { lazy } from "react";

const Album = lazy(() => import('../views/Albums/albums.router'));

export const MainRouter = [
    {
        path: '/albums/*',
        name: 'albums',
        component: Album,
    },
];