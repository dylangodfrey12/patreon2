import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router} from '@angular/router'

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
    em {float:right; color#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
  `]
})

export class ProfileComponent implements OnInit{
    profileForm:FormGroup
    private username:FormControl
    private password: FormControl
    constructor(private authService:AuthService, private router:Router){

    }
       ngOnInit(){
            this.username = new FormControl(this.authService.currentUser.username, Validators.required)
            this.password = new FormControl(this.authService.currentUser.password,Validators.required)

           this.profileForm = new FormGroup({
               username: this.username,
               password: this.password
           })
        }

        cancelClicked(){
                this.router.navigate(['home'])
           } 

        saveProfile(formValues){
            if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValues.username, formValues.password)
            this.router.navigate(['home'])
              }
        }
        validateUsername(){
           return this.username.valid || this.username.untouched
        }
        validatePassword(){
            return this.password.valid || this.password.untouched
         }

}
