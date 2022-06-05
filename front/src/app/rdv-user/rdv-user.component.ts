import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-rdv-user',
  templateUrl: './rdv-user.component.html',
  styleUrls: ['./rdv-user.component.css']
})
export class RdvUserComponent implements OnInit {

  myHolidayDates = [];
  form : FormGroup;
  types =[
    { value : 'rendez vous simple', viewValue : 'rendez vous simple'},
    { value : 'consultation technique', viewValue : 'consultation technique'}
  ];

  constructor(
    private http:HttpClient,
    private norification : NotificationService
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/rdv/getAllRdvs').subscribe((data:any)=>{
      this.myHolidayDates = data.map(d =>{
        return new Date(d.date);
      });
      this.form = new FormGroup({
        date : new FormControl(Validators.required),
        type : new FormControl(Validators.required),
      });
    })
  }

  myHolidayFilter = (d: Date): boolean => {
    const time=d.getTime();
    return !this.myHolidayDates.find(x=>x.getTime()==time);
}

onSubmit(){
  const date = this.changeDate(this.form.value.date);
  const user = JSON.parse(localStorage.getItem('user'));

  this.http.post('http://localhost:3000/api/rdv/addRdv',{
    date : date,
    type : this.form.value.type,
    nom : user.name,
    email : user.email
  }).subscribe(data=>{
    this.norification.success('Rendez vous ajouté avec succès');
    this.ngOnInit();
  });


}

changeDate(olddate){
  let date = olddate.toString().split(' ');

  //change month to number
  let month = date[1];
  switch(month){
    case 'January':
      month = '01';
      break;
    case 'February':
      month = '02';
      break;
    case 'March':
      month = '03';
      break;
    case 'April':
      month = '04';
      break;
    case 'May':
      month = '05';
      break;
    case 'June':
      month = '06';
      break;
    case 'July':
      month = '07';
      break;
    case 'August':
      month = '08';
      break;
    case 'September':
      month = '09';
      break;
    case 'October':
      month = '10';
      break;
    case 'November':
      month = '11';
      break;
    case 'December':
      month = '12';
      break;
  }
  let dateString = month+'/'+date[2]+'/'+date[3];
  return dateString;

}



}
