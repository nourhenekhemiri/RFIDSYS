import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { LocalStorageService } from '../shared/local-storage.service';

@Component({
  selector: 'app-sidenav-user',
  templateUrl: './sidenav-user.component.html',
  styleUrls: ['./sidenav-user.component.css']
})
export class SidenavUserComponent implements OnInit {
  currentUser: any;

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
  ) {

   }

  ngOnInit(): void {
    this.authService.getUserName();
    this.authService.usernameObserver().subscribe(data => {
      this.currentUser = data;
    })
  }
  logout() {
    this.authService.logout();
  }
}
