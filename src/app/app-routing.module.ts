import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path:'inicio', component:HomeComponent},
  {path:'acerca-de', component:AboutComponent},
  {path:'iniciar-sesion', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
