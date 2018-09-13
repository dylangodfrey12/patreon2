import {Injectable} from '@angular/core'
import {IUserAccount, ILogin} from './user.model'
import {Router} from '@angular/router'

@Injectable()

export class AuthService {
    currentUser:ILogin
    constructor(private router:Router){

    }
    loginUser(username: string, password: string){
        this.currentUser = { 
            username: 'dylan',
            password: 'Godfrey'
        }
        this.router.navigate(['profile'])
    }
    
    isAuthenticated(){
        return !!this.currentUser;
    } 
    updateCurrentUser(username:string, password:string){
        this.currentUser.username = username
        this.currentUser.password = password
    }
}  