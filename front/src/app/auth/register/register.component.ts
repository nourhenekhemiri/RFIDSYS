import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

import { AuthService } from "src/app/shared/auth.service";
import { MailService } from 'src/app/shared/mail.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  loading = false;
  buttionText = "Submit";

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router , public http :MailService , private notification :NotificationService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirm_password: ['',[Validators.minLength(6), Validators.required]]
    }, {validator: this.passwordMatchValidator('password', 'confirm_password')}
    );
   }

  ngOnInit(): void {
    console.log(this.registerForm);
  }
  private passwordMatchValidator(password: string, confirm_password: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[password];
      const confirmPasswordInput = group.controls[confirm_password];
      if (passwordInput.value !== confirmPasswordInput.value) {
        return confirmPasswordInput.setErrors({ NoPassswordMatch: true });
      }
    }
  }
    

  signupUser() {
    /*this.loading = true;
   this.buttionText = "Submiting...";
    let user = {
      name: this.registerForm.value,
      email: this.registerForm.value
    }*/
    this.authService.signup(this.registerForm.value).subscribe(res => {
      if(res.status == 201) {
        
        this.registerForm.reset();
        this.router.navigate(['/auth/login']);
        this.notification.success(':: Registred successfully ');

      /*  this.http.sendEmail("http://localhost:3000/sendmail", user).subscribe(
          data => {
            let res:any = data; 
            console.log(
              `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
            );
          },
          err => {
            console.log(err);
            this.loading = false;
            this.buttionText = "Submit";
          },() => {
            this.loading = false;
            this.buttionText = "Submit";
          }
        );
        
      }
    });*/

  }

  })
  }
  }
