import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Agency } from '../about.model';
import { catchError, retry } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})

export class AgencyService {
  //private apiUrl='http://localhost:3000/Agency';
  
  //api backend
  private base_url="http://localhost:3000/api/agencys"

  Agency={
    date_creation:'', 
    owner:'', 
    location:'',
    description:''
  }
  constructor(private http :HttpClient, private datePipe: DatePipe) { }

  //http opttion
  httpOptions={ 
    headers:new HttpHeaders({
      'content-type':'application/json'

    })
  }
  //handel api  errors 
  handleError(error: HttpErrorResponse){
    if( error.error instanceof ErrorEvent){
    //a client-side or a neetwork error occurend .Handel it accordingly
    console.error('An Error occurend' , error.error.message)

  }
  else{
    // the backend may returned an successfully response code 
    // the response body may contain clues as to what went wrong 
    console.error(`backend returned code ${error.status}, ` +
    `body was : ${ error.error}`
    );}
   // return an observabel with a user-facing error message 
  return throwError( 'something bad happined , please try again later .');
};


// insert 
create(item : Agency):Observable<Agency>{
  return this.http.post<Agency>(this.base_url,JSON.stringify(item),this.httpOptions).pipe(retry(2),catchError(this.handleError));
}

//get all team data 
all():Observable<Agency>{
   return this.http.get<Agency>(this.base_url).pipe(retry(2),catchError(this.handleError));
 }


  // get team by id
  getByid(_id:number):Observable<Agency>{
    return this.http.get<Agency>(this.base_url + '/' +_id).pipe(retry(2),catchError(this.handleError));

  }

   // update team by Id the
   update(item :any){
     return this.http.put<Agency>(this.base_url + '/' +item._id,JSON.stringify(item),this.httpOptions).pipe(retry(2),catchError(this.handleError));
   }

    // delete cars
    delete(_id:number){
      return this.http.delete<Agency>(this.base_url + '/' +_id,this.httpOptions).pipe(retry(2),catchError(this.handleError));

}

//validation formulaire
  form : FormGroup= new FormGroup({
    _id: new FormControl(null),
   owner: new FormControl('',Validators.required),
   location : new FormControl('',[ Validators.required]),
  date_creation: new FormControl('',Validators.required),
  description : new FormControl('',Validators.required),
 image : new FormControl('',Validators.required),
});

// inialisation formulaire 
initializeFormGroup() {
  this.form.setValue({
    _id :null,
    description:'',
    location:'',
    owner :'',
    date_creation:'' == "" ? "" : this.datePipe.transform(this.Agency.date_creation, 'yyyy-MM-dd'),
    image :''

  });
}


}

