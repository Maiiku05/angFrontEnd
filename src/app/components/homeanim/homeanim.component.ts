import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-homeanim',
  templateUrl: './homeanim.component.html',
  styleUrls: ['./homeanim.component.css']
})
export class HomeanimComponent implements AfterViewInit {

  level = "Jr.";
  career = "FullStack Web Developer.";

  constructor() { }
  ngAfterViewInit(): void {
    anime({
      targets: '.c1 .el',
      direction: 'alternate',
      loop: true,
      scale: {
        value: '1.4',
        delay: function(el: any , i: number , l: any) {
          return i * 800;
        },
        duration: 700
      }

    });
}

}

