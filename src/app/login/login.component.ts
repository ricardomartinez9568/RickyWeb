import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';


const localStorage = window.localStorage;



class Credentials {
  email: string;
  password: string;
}

interface ServerResponse {
  type: boolean;
  data: any;
  token: any;
}

@Component({
  selector: 'app-admin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials: Credentials;
  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.credentials = new Credentials();
  }

  onSubmit() {
    console.log(this.credentials);
    this.auth.login(this.credentials)
      .subscribe((res: ServerResponse) => {
        console.log(res);
        if (res.type === true) {
          console.log('logged in');
          console.log(res.token);
          localStorage.setItem('authorization', res.token);
          this.credentials.email = '';
          this.credentials.password = '';
          this.router.navigateByUrl('admin');
        } else if (this.credentials.email !== 'rm3@mscpsharks.org') {
          alert('YEEET');
        } else if (this.credentials.password !== 'password-1') {
          alert('YEEET');
          console.log(res.data);
        }
      });
    }
  }
