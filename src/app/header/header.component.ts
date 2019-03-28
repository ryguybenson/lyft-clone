import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  console.log($event);
  console.log("scrolling");
  if(scrollY >= 0 && scrollY <= 100) {
    console.log("white");
  } else {
    console.log("hide");
  }
}

  headerChange(scrollY) {
  }

  constructor() { }

  ngOnInit() {
  }
}
