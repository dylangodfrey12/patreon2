
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./Login/login.component";
import { ProfileComponent} from "./Login/profile.component"
import {Routes} from '@angular/router';
import { AppComponent } from "./app.component";

export const appRoutes:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]     