import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  
  constructor(private router: Router, private route: ActivatedRoute ,private _userService: UserService){
  }

  ngOnInit(): void {
    this.router.events.subscribe(data => {
    if(data instanceof NavigationEnd){
      if(data.url == "/"){
        this.start = true;
      }
      else{
        this.start = false;
      }
    }
    })
  }

  loggedIn = false;
  start = false;

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
