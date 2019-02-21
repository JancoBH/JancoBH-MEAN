import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {PortafoliosComponent} from './components/portafolios/portafolios.component';
import {ComunidadComponent} from './components/comunidad/comunidad.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'blog', component: BlogComponent},
  {path: 'tutorial', loadChildren: './components/tutorial/tutorial.module#TutorialModule'},
  {path: 'portfolio', component: PortafoliosComponent},
  {path: 'comunidad', component: ComunidadComponent},
  {path: 'contact', component: ContactoComponent},
  {path: 'about', component: AboutComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
