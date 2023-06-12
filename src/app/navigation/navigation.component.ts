import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  
  constructor(private router: Router, private route: ActivatedRoute ,private _userService: UserService){
  }

  ngOnInit(): void {
    this._userService.isLoggedIn.subscribe(data => this.loggedIn = data);
    this.router.events.subscribe(data => {
    if(data instanceof NavigationEnd){
      this.login = false;
      this.profile = false;
      this.start = false;
      switch(data.url){
        case "/":
          this.start = true;
          break;
        case "/login":
          this.login = true;
          break;
        case "/profile":
          this.profile = true;
          break;
        default:
          this.login = false;
          this.profile = false;
          this.start = false;
      }
    }
    })
  }

  loggedIn = false;
  start = false;
  login = false;
  profile = false;

  onProfile(){
    this.router.navigate(['/profile']);
  }

  onLogin(){
    this.router.navigate(['/login']);
  }

  onLogout(){
    this._userService.logOut();
  }
}
