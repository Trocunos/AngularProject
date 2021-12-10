import { Component, OnInit } from '@angular/core';
import { UpdateAccountService } from './change-info.service';

@Component({
  selector: 'app-change-info',
  templateUrl: './change-info.component.html',
  styleUrls: ['./change-info.component.scss']
})

export class ChangeInfoComponent implements OnInit {

  account = {
    email: "",
    password: ""
  }


  constructor(
    private readonly updateAccountService: UpdateAccountService
  ) { }

  ngOnInit(): void {
  }
  atualizarUsuario() {
    this.updateAccountService.updateAccount(this.account).subscribe((data: any) => {
      alert("Conta atualizada com sucesso!")
    }, error => {
      alert(`${this.account.email}Erro ao atualizar a conta!`)
    }
    )



  }

}