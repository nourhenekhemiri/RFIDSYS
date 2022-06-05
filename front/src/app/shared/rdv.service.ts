import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { rdv } from '../rdv.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root',
})
export class RentrdvService {
  //private apiUrl ='http://localhost:3000/rents'; //json url
    // API BACKEND
    private base_url='http://localhost:3000/api/rentsrdvs';
  constructor(private http :HttpClient) { }

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


// insert a car
create(car : rdv):Observable<any>{
  return this.http.post<rdv>(this.base_url,JSON.stringify(car),this.httpOptions).pipe(retry(2),catchError(this.handleError));
}

//get all cars data 
 getcars():Observable<rdv>{
   return this.http.get<rdv>(this.base_url).pipe(retry(2),catchError(this.handleError));
 }


  // get carq by id
  getByid(_id:number):Observable<rdv>{
    return this.http.get<rdv>(this.base_url + '/' +_id).pipe(retry(2),catchError(this.handleError));

  }

   // update cars by Id the
   update(item :any){
     return this.http.put<rdv>(this.base_url + '/' +item._id,JSON.stringify(item),this.httpOptions).pipe(retry(2),catchError(this.handleError));
   }

    // delete cars
    delete(_id:number){
      return this.http.delete<rdv>(this.base_url + '/' +_id,this.httpOptions).pipe(retry(2),catchError(this.handleError));

}

//validation formulaire
  form : FormGroup= new FormGroup({
    _id: new FormControl(null),
    Nom_Voiture: new FormControl('',Validators.required),
    Nom_utilisateur : new FormControl('',[ Validators.required,Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Date_debut : new FormControl('',Validators.required),
    Date_fin : new FormControl('',Validators.required)
});

// inialisation formulaire 
initializeFormGroup() {
  this.form.setValue({
    _id :null,
    Nom_Voiture: '',
    Nom_utilisateur: '',
    email: '',
    Date_debut: '',
    Date_fin: '',
  });
}



}