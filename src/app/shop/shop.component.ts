import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

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
