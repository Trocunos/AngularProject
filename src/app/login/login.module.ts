import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginUsuarioService } from './login.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,

    FormsModule
  ],
  providers: [LoginUsuarioService]
})
export class LoginModule { }
