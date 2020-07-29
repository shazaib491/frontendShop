import { Injectable } from '@angular/core';
import { observable, throwError } from 'rxjs';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  baseUrl = "http://localhost:3000/api";
  
  // headers = new HttpHeaders().set('Content-type', 'application/json');
  
  constructor(private http: HttpClient) { }
  
  addUser(p_name: string, p_sname: string, discount: string, price: string, p_category: string, image: File) {
    var formData = new FormData();
    formData.append('p_name', p_name);
    formData.append('p_sname', p_sname);
    formData.append('discount', discount);
    formData.append('price', price);
    formData.append('p_category', p_category);
    formData.append('image', image);
    return this.http.post(`api/insert`, formData, {
      reportProgress: true,
      observe: 'events',
    })
  }
  
  // get alldata
  getUser(){
    return this.http.get(`api/selectAll`);
  }
  // get alldata
// byid
getUbyId(id){
  return this.http.get(`api/selectById/${id}`);
}
// byid

//update
onUpdate(data,id:string){
  var formData = new FormData();
    formData.append('p_name', data.p_name);
    formData.append('p_sname', data.p_sname);
    formData.append('discount', data.discount);
    formData.append('price', data.price);
    formData.append('p_category', data.p_category);
    formData.append('image', data.image);
  return this.http.patch(`api/update/${id}`,formData,{responseType: 'text'})
}
//update
//contact
contact(payload){
  return this.http.post(`api/contacts`,payload);
}
//contact

// delete data
onDelete(id){
  return this.http.delete(`api/remove/${id}`, { responseType: 'text' });
}
// delete data
  //Error Handling
  errManagement(error: HttpErrorResponse) {
    let errMessage = '';
    if (error.error instanceof ErrorEvent) {
      errMessage = error.error.message;
    }
    else {
      errMessage = `Error Code:${error.status}\n Message:${error.message}`;
    }
    return throwError(errMessage);
  }
}
