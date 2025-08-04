import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';
  loginError = false;

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    if (!this.authService.login(this.email, this.password)) {
      this.loginError = true;
    } else {
      this.loginError = false;
    }
  }

}
