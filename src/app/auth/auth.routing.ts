import {Routes} from '@angular/router';
import {AuthLoginComponent} from './auth-login/auth-login.component';

export const AuthRoute: Routes = [
    {
        path: 'login',
        component: AuthLoginComponent
    }
];
