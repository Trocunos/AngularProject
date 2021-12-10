import { Component, OnInit } from '@angular/core';

import { CreateAccountService } from './create-account.service';





@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})

export class CreateAccountComponent implements OnInit {

  account={
    email: "",
    name: "",
    password: "",
    passwordConfirmation: ""

  }


  constructor(
    private readonly createAccountService: CreateAccountService
  ) { }

  ngOnInit(): void {
  }
  cadastrarUsuario(){
    this.createAccountService.createAccount(this.account).subscribe((data: any) => {
      alert("Conta criada com sucesso!")
    }, error => {
      alert(`${this.account.email}Erro ao criar a conta!`)
    }
    )
  }

  

}
