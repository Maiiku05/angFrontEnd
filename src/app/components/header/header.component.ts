import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';
declare var anime: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  eduData:any;
  arrShowSec:Boolean[] = [false,false,false,false];
  career:String =  "Full Stack Developer";
  level:String = "Jr";


  faCoffee = faCoffee;
  faBrain = faBrain;
  faBook = faBook;
  faFlask = faFlask;

  constructor(private dataPort:PortfolioService) {}

  ngOnInit(): void {
    this.dataPort.dataFromPortfolio().subscribe(data =>{
      alert(JSON.stringify(data));
      this.eduData=data.education;
    });
  }

   showSec(sec:number){

    let arr = this.arrShowSec;
    arr[sec] = !arr[sec];

    for (let i = 0; i < arr.length ; i++) {

      if (i !== sec) {
        arr[i] = false;
      }

    }

    };





}

