import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Container } from '@mui/material'
// Components
import Auth from './components/Auth/Auth'

const router = createBrowserRouter([
    { path: "/auth/:type", element: <Auth /> },
]);

function App() {
    return (
        <Container maxWidth='xl'>
            <RouterProvider router={router} />
        </Container>
    );
}

export default App;