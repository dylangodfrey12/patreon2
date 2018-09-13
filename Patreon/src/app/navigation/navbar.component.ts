import { Component } from '@angular/core'
import { AuthService} from '../Login/auth.service'

@Component({
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.css']
})
 
export class NavBarComponent{
 constructor(public auth:AuthService){
     
 }
}   