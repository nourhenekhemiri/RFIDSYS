import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  form : FormGroup;
  user = JSON.parse(localStorage.getItem('user'));
  user_image : string = null;
  constructor(
    private http: HttpClient,
    private notification :NotificationService,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.getUserData();

  }

  getUserData(){
    this.http.get(`http://localhost:3000/api/auth/profile/${this.user.id}`).subscribe((res:any)=>{
      this.user_image = res.image;
      // console.log(res.image);

      this.form = new FormGroup({
        name : new FormControl(res.name),
        email : new FormControl(res.email),
        password : new FormControl(null),
        city : new FormControl(res.city),
        job : new FormControl(res.job),
        description : new FormControl(res.description),
        image : new FormControl(),
      });
    });
  }

  onSubmit(){
    var data = new FormData();
    data.append('name', this.form.value.name);
    data.append('email', this.form.value.email);
    data.append('password', this.form.value.password);
    data.append('city', this.form.value.city);
    data.append('job', this.form.value.job);
    data.append('description', this.form.value.description);
    data.append('image', this.form.value.image);

    this.http.put(`http://localhost:3000/api/auth/profile/update/${this.user.id}`,data).subscribe((res:any)=>{
      this.notification.success(':: Profile Updated successfully ');
      this.getUserData();
      this.authService.getUserName();
    });
  }

  onFilePicked(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

}
