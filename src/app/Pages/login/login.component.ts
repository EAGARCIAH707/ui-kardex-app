import {Component, OnInit} from '@angular/core';
import {SignInDTO} from '../../shared/domain/user/signInDTO';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginService} from '../../Services/session/login.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signInDTO: SignInDTO = new SignInDTO();
  type = 'warning';
  message: string;


  constructor(private router: Router,
              private loginService: LoginService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit() {

  }

  signIn() {
    this.loginService.login(this.signInDTO).subscribe(res => {
      this.openSnackBar('Login Exitoso!', 'Ok');
      this.router.navigate(['/kardex']);
    }, (error: HttpErrorResponse) => {
      this.openSnackBar('Login Fallido', 'Fail');
    });
  }

  openSnackBar(message, status) {
    this._snackBar.open(message, status, {
      duration: 4000,
    });
  }
}
