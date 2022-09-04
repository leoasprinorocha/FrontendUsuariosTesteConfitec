import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetalhesusuarioComponent } from './components/detalhesusuario/detalhesusuario.component';
import { AdicionausuarioComponent } from './components/adicionausuario/adicionausuario.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";




@NgModule({
  declarations: [
    HomeComponent,
    DetalhesusuarioComponent,
    AdicionausuarioComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule

  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }
