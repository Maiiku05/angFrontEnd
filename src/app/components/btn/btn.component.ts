import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})



export class BtnComponent implements OnInit {
  faIdCard = faIdCard;

  @Output() btnCliked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cliked(){
    this.btnCliked.emit();
  }

}
