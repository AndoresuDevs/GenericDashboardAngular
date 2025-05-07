import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { HomeComponent } from './features/home/home.component';
import { InventoryComponent } from './features/inventory/inventory.component';

export const routes: Routes = [
    // Rutas de redireccionamiento
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    //Rutas Auth sin layout
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
    },
    //  Rutas Post Auth con layout
    {
        path: '',
        component: MainLayoutComponent, // layout con drawer y toolbar
        children: [
            
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
            },
        ]
    },
    // Rutas de error
    { 
        path: '**', 
        redirectTo: 'home' 
    },
];
