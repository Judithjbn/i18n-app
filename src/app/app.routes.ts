import { Routes } from '@angular/router';
import Products from './views/products/products';

export const routes: Routes = [
    {   
        path: '', 
        loadComponent: () => import('./views/products/products').then((m) => m.default),
    },
    { 
        path: 'basic-plan', 
        loadComponent: () => import('./views/basic-plan/basic-plan').then((m) => m.default),
    },
    { path: '**', redirectTo: '' },
];
