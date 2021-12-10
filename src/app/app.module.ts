import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChangeInfoComponent } from './change-info/change-info.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { UpdateAccountService } from './change-info/change-info.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    ChangeInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,

    RouterModule
  ],
  providers: [UpdateAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
