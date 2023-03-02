import {Routes} from '@angular/router';
// Layouts
import {
    SimplyWhiteLayout,
    BlankSimplywhiteComponent
} from './@pages/layouts';
import {AuthGuard} from './auth/auth.guard';
import {DashboardComponent} from './dashboard/dashboard.component';


export const AppRoutes: Routes = [
    {
        path: '',
        component: SimplyWhiteLayout,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: DashboardComponent,
                data: {layoutOption : {'Dashboard' : '/'}}
            },
            {
                path: 'catalogs',
                loadChildren: './catalogs/catalogs.module#CatalogsModule'
            }
        ]
    },
    {
        path: '',
        component: BlankSimplywhiteComponent,
        children: [
            {
                path: 'auth',
                loadChildren: './auth/auth.module#AuthModule'
            }
        ]
    },
    {path: '**', redirectTo: ''}
];
