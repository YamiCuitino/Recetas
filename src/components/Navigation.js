import React from 'react';
import { Menubar } from 'primereact/menubar';

import { useAuth } from '../Context/AuthContext';

const Navigation = () => {
    const [isAuthenticated, cerrarSesion] = useAuth();

    const itemAuthenticated = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Recetas',
            icon: 'pi pi-apple',
            url: '/mis-recetas'
        },
        {
            label: 'Contacto',
            icon: 'pi pi-address-book',
        },
        {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            command: () => cerrarSesion()
        }
    ];

    const itemUnauthorized = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Ingresar',
            icon: 'pi pi-user',
            url: '/Inicio-sesion'
        },
        {
            label: 'Registrarme',
            icon: 'pi pi-user-plus',
            url: '/Registro'
        }
    ];

    const items = isAuthenticated ? itemAuthenticated : itemUnauthorized;

    return <Menubar model={items} />;
};

export default Navigation;

