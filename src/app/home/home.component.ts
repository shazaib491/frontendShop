import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'owlcarouselinAngular';  
  Images = ['../assets/img/banner-1.jpeg', '../assets/img/banner-9.jpg', '../assets/img/banner-5.jpeg'];  
  
  SlideOptions = { items: 1, dots: false, nav: true, navText:["<div class='fa fa-arrow-circle-left text-light fa-3x position-absolute' style='top:200px;left:0px'></div>","<div class='fa fa-arrow-circle-right text-light fa-3x position-absolute' style='top:200px;right:0px'></div></div>"]};  
  // CarouselOptions = { items: 3, dots: false, nav: true }; 
  constructor() { }

  ngOnInit(): void {
  }

}
