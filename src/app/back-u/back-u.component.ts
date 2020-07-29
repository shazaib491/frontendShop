import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router'
import { FileUploadService } from '../file-upload.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpEventType, HttpEvent } from '@angular/common/http';
@Component({
  selector: 'app-back-u',
  templateUrl: './back-u.component.html',
  styleUrls: ['./back-u.component.css']
})
export class BackUComponent implements OnInit {
  forms: FormGroup;
  public data:any = []
  constructor(public router: Router,
    private route: ActivatedRoute,
    private fileUploadService: FileUploadService,
    private fb: FormBuilder,) {
    this.forms = this.fb.group({
      p_name: [],
      p_sname: [],
      discount: [],
      price: [],
      p_category: [],
      image: [null]
    })
  }
  id: any;
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.fileUploadService.getUbyId(this.id).subscribe((data) => {
        this.data=data;
        
      })
    })
  }
  uploadFile(events) {
    const file = (event.target as HTMLInputElement).files[0];
    this.forms.patchValue({
      image: file
    })
  }
  UpdateForm(){
    this.fileUploadService.onUpdate(this.forms.value,this.id).subscribe((data)=>{
       
      console.log(data);
           
    })
    this.router.navigate(['back',{title:"data updated"}]);
  }
}


