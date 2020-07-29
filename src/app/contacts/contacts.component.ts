import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  forms:FormGroup;
  public data:any=[];
  success:any;
  constructor(public fb:FormBuilder,public fileupload:FileUploadService,
    public notifyService : NotificationService
    ) { 
    this.forms=this.fb.group({
      name:[],
      email:[],
      message:[],
      mobile:[]
    })
  }

  ngOnInit(): void {
    
  }
  
  postContact(){
    console.log(this.forms.value)
    this.fileupload.contact(this.forms.value).subscribe((data)=>{
      console.log(data);
      this.data=data;
            this.success=this.data.msg;
    })
  }

}
