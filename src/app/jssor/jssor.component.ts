import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FileUploadService } from '../file-upload.service';
@Component({
  selector: 'app-jssor',
  templateUrl: './jssor.component.html',
  styleUrls: ['./jssor.component.css']
})
export class JssorComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    
    navText: ['<div class="fa fa-long-arrow-left "></div>', '<div class="fa fa-long-arrow-right"></div>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    margin:10,
    nav: true,
  }
  constructor(
    public fileUploadService:FileUploadService
  ) { }
  public users:any=[];

  ngOnInit(): void {
    this.fileUploadService.getUser().subscribe((data)=>{
      this.users=data;
      console.log(this.users);
      
    })
  }

}
