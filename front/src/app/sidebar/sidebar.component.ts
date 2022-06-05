import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  currentUser: any;

  constructor(
    private authService: AuthService,
  ) {

  }

  ngOnInit(): void {
    // const user_id = this.localStorageService.get('user').id;
    // this.http.get('http://localhost:3000/api/auth/profile/'+user_id).subscribe((data:any)=>{
    //   console.log(data);

    //   this.currentUser = data;
    // });
    this.authService.getUserName();
    this.authService.usernameObserver().subscribe(data => {
      console.log(data);

      this.currentUser = data;
    })
  }


  logout() {
    this.authService.logout();
  }

}
