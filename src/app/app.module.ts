import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

import {IMaskModule} from 'angular-imask';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConteudoComponent,
    CadastroComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
