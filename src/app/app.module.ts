import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';
import { NewCompanyFormComponent } from './new-company-form/new-company-form.component';
import { ManagementPageComponent } from './management-page/management-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NewUserFormComponent,
    NewCompanyFormComponent,
    ManagementPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
