import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthLoginComponent} from './auth-login/auth-login.component';
import {RouterModule} from '@angular/router';
import {AuthRoute} from './auth.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../@pages/components/shared.module';

@NgModule({
    declarations: [
        AuthLoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(AuthRoute)
    ]
})
export class AuthModule {
}
