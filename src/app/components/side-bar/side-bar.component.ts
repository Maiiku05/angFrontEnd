import { Component, OnInit } from '@angular/core';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  btn:any = document.querySelector('#menu-btn');
  menu:any = document.querySelector('#sidemenu');

  tState = [ "menu-expanded", "menu-collapsed" ];
  toggled = false;

  faIdCard = faIdCard;


  constructor() { }

  ngOnInit(): void {

  }

  toggle(){
    this.toggled = !this.toggled;
    return this.tState[Number(this.toggled)];

  }



}

