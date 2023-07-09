import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarEditarComponent } from './components/agregar-editar/agregar-editar.component';
import { VerComponent } from './components/ver/ver.component';

const routes: Routes = [
  { path: '', component: ListarComponent },
  { path: 'agregar', component: AgregarEditarComponent },
  { path: 'editar/:id', component: AgregarEditarComponent },
  { path: 'ver/:id', component: VerComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
