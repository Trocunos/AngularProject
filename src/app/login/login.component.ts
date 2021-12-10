import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuarioService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: '',
  };

  constructor(
    private router: Router,
    private readonly loginUsuarioService: LoginUsuarioService,
  ) {}

  ngOnInit(): void {
    //if(localStorage.getItem("user")){
    const userStorage: any = JSON.parse(localStorage.getItem('user') || '{}');
    this.login.email = userStorage.email;
    // }
  }

  loginUsuario() {
    let data1 = {
      username: this.login.email,
      password: this.login.password,
    };
    console.log(this.login);
    this.loginUsuarioService.loginUsuario(data1).subscribe(
      (data: any) => {
        alert('Login realizado com sucesso');
        localStorage.setItem('user', JSON.stringify(data.body));
        this.router.navigate(['updateaccount']);
      },
      (error) => {
        alert(`${this.login.email} Erro ao logar`);
      }
    );
  }
  HandleLogin() {
    this.router.navigate(['/createaccount']);
  }
}