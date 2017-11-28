import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { FormService } from './form.service';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NewFormComponent } from './newform.component';
import { EditComponent } from './edit.component';

const appRoutes:Routes = [
    {path:'list',component:ListComponent},
    {path:'newform',component:NewFormComponent},
    {path:'edit/:id',component:NewFormComponent},
   
  ]

@NgModule({
  declarations: [
    FormComponent,
    ListComponent,
    NewFormComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
   RouterModule.forRoot(appRoutes),
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FormComponent]
})
export class FormModule { }
