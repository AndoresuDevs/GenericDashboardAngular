import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'inventory',
        loadComponent: () => import('./features/inventory/inventory.component').then(m => m.InventoryComponent)
    },
    {
        path: 'sales',
        loadComponent: () => import('./features/sales/sales.component').then(m => m.SalesComponent)
    },
    {
        path: 'management',
        loadComponent: () => import('./features/management/management.component').then(m => m.ManagementComponent),
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full',
            },
            {
                path: 'users',
                loadComponent: () => import('./features/management/users/users.component').then(m => m.UsersComponent)
            },
            {
                path: 'roles',
                loadComponent: () => import('./features/management/roles/roles.component').then(m => m.RolesComponent)
            },
            {
                path: 'categories',
                loadComponent: () => import('./features/management/categories/categories.component').then(m => m.CategoriesComponent)
            }
        ]
    }
];
