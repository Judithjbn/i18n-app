import { Routes } from '@angular/router';
import Products from './views/products/products';
import { Layout } from './layouts/layout/layout';

export const routes: Routes = [
    {   path: '', 
        component: Layout,
        children: [
            { 
                path: '', 
                loadComponent: () => import('./views/products/products').then((m) => m.default),
            },
            { 
                path: 'basic-plan', 
                loadComponent: () => import('./views/basic-plan/basic-plan').then((m) => m.default),
            },
        ]
     },
    
    { path: '**', redirectTo: '' },
];
