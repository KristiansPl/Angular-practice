import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit{
  constructor(private route: ActivatedRoute, private _userService: UserService){
  }
  ngOnInit(): void {
    /* this._userService.getMory(); */
  }
  /* morty = {
    well: "LETS GET SOME MORTY HERE"
  }; */
}
