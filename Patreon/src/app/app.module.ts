import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { NavBarComponent } from './navigation/navbar.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './routes';
import { UserModule } from './user.module';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AuthService } from './Login/auth.service';
import { ProfileComponent } from './Login/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    UserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService  ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }
