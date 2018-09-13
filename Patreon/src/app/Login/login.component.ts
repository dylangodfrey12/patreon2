import { Component, Input, Output, EventEmitter } from '@angular/core'
import {ILogin} from './user.model' 
import { AuthService} from './auth.service'
@Component({
    selector: 'Login',
    templateUrl: 'login.component.html'
})
export class LoginComponent{
     constructor(private authService:AuthService){

     }
    username
    password
    login(formValues) {
        this.authService.loginUser(formValues.username,
             formValues.password)
    }

    CreateClicked(form){
        this.login(form);
    }
}

