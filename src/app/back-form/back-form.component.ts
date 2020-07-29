import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRouteSnapshot,ActivatedRoute } from '@angular/router';
import { FileUploadService } from '../file-upload.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-back-form',
  templateUrl: './back-form.component.html',
  styleUrls: ['./back-form.component.css']
})
export class BackFormComponent implements OnInit {
  preview: string;
  form: FormGroup;
  percentage: any = 0;
  users: {};
  updated:any;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public fileUploadService: FileUploadService,
    public rott:ActivatedRoute
  ) {
    this.form = this.fb.group({
      p_name: [],
      p_sname: [],
      discount: [],
      price: [],
      p_category: [],
      image: [null]
    })
  }

  ngOnInit(): void {
    this.fileUploadService.getUser()
    .subscribe((data)=>{
      this.users=data;
      console.log(this.users);
    })
    this.updated=this.rott.snapshot.paramMap.get('title');
    
  }
  uploadFile(events) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file
    })
    // this.form.get('image').updateValueAndValidity();
  }
  submitForm() {
    console.log(this.form.value);
    
    this.fileUploadService.addUser(
      this.form.value.p_name, this.form.value.p_sname,
      this.form.value.discount, this.form.value.price,
      this.form.value.p_category, this.form.value.image)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('request has been made');
            break;
          case HttpEventType.ResponseHeader:
            console.log('response has been recieved');
            break;
          case HttpEventType.UploadProgress:
            this.percentage = Math.round(event.loaded / event.total * 100)
            console.log(`Uploaded!${this.percentage}%`);
            break;
          case HttpEventType.Response:
            console.log('user succesfully created', event.body);
            this.percentage = false;
            this.router.navigate(['back']);
        }
      })
  }
  // updateing material
  
  // updateing material
  //Deleting material
  onDelete(id)
  {
    console.log();
    
    this.fileUploadService.onDelete(id).subscribe((response)=>{
      console.log(response);
      
    })
  }
  //Deleting material

  

}
