import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IsNotAuthGuard } from '../guard/is-not-auth.guard';
const routes: Routes = [{ path: '', component: AuthComponent },
{path:"login", component:LoginComponent, canActivate:[IsNotAuthGuard]},
{path:"register", component:RegisterComponent, canActivate:[IsNotAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  declarations: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthRoutingModule { }
