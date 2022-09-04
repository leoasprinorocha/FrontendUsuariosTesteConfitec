import { HomeComponent } from "./components/home/home.component";
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { DetalhesusuarioComponent } from "./components/detalhesusuario/detalhesusuario.component";

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detalhesusuario',
    component: DetalhesusuarioComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
