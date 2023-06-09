import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Data } from '@angular/router';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  hasData = false;

  userData = {
    userName: "",
    password: "",
    popup: false
    };
  
  ngOnInit(): void {
    this.userData=this._userService.getUser();
    if(this.userData.userName!=null && this.userData.userName != ""){
      this.hasData = true;
    }
    if(!this.hasData){
      this.router.navigate(['/']);
    }
  }

  constructor(private _userService: UserService, private router: Router){
  }

  onSayHi(){
    alert("Hello there " + this.userData.userName + "!");
  }

}
